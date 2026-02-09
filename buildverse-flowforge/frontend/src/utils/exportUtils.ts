import { toPng } from 'html-to-image';

/**
 * Export the React Flow container to a high-resolution PNG
 * with a **transparent** background.
 *
 * Uses html-to-image with backgroundColor: null.
 * Triggers an automatic file download as "flowchart.png".
 */
export async function downloadPng(element: HTMLElement): Promise<void> {
  const dataUrl = await toPng(element, {
    backgroundColor: null,       // transparent — no background color
    quality: 1,
    pixelRatio: 2,               // high-resolution export
    filter: (node) => {
      // Remove React Flow chrome from the export
      const exclude = ['react-flow__controls', 'react-flow__minimap', 'react-flow__attribution'];
      if (node.classList) {
        return !exclude.some((cls) => node.classList.contains(cls));
      }
      return true;
    },
  });

  // Trigger automatic download
  const link = document.createElement('a');
  link.download = 'flowchart.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
