export async function onRequest(context) {
  const { request, env } = context;
  
  // Get full object first to know the total size
  const fullObject = await env.buildverse_videos.get('ClinicFlow.mp4');
  if (!fullObject) {
    return new Response('Video not found', { status: 404 });
  }
  
  const totalSize = fullObject.size;
  
  // Support Range requests for video streaming
  const range = request.headers.get('Range');
  let object = fullObject;
  let status = 200;
  
  if (range) {
    const [start, end] = range.replace(/bytes=/, '').split('-').map(Number);
    const startPos = start || 0;
    const endPos = end || totalSize - 1;
    const contentLength = endPos - startPos + 1;
    
    // Get partial object
    object = await env.buildverse_videos.get('ClinicFlow.mp4', {
      range: { offset: startPos, length: contentLength }
    });
    
    if (!object) {
      return new Response('Range not satisfiable', { status: 416 });
    }
    
    status = 206;
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Content-Type', 'video/mp4');
  headers.set('Accept-Ranges', 'bytes');

  if (range) {
    const [start, end] = range.replace(/bytes=/, '').split('-').map(Number);
    const startPos = start || 0;
    const endPos = end || totalSize - 1;
    const contentLength = endPos - startPos + 1;

    headers.set('Content-Range', `bytes ${startPos}-${endPos}/${totalSize}`);
    headers.set('Content-Length', contentLength.toString());
  } else {
    headers.set('Content-Length', totalSize.toString());
  }

  return new Response(object.body, { status, headers });
}

