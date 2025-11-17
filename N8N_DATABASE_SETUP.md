# 💾 Database Setup for Nova Voice Agent

This guide will help you configure a PostgreSQL database in n8n so Nova can store appointment bookings automatically.

## 🎯 Overview

The workflow stores appointment data in a PostgreSQL database table called `appointments`. This includes:
- Customer name and email
- Meeting duration (15 or 30 minutes)
- Date and time
- Purpose/notes
- Creation timestamp

## 📋 Step-by-Step Setup

### Step 1: Choose a Database Provider

You have several options:

#### Option A: Supabase (Recommended - Free Tier)
- **URL**: https://supabase.com
- **Free Tier**: 500 MB database, unlimited API requests
- **Setup Time**: 5 minutes
- **Perfect for**: Development and small production

#### Option B: Railway (Easy Setup)
- **URL**: https://railway.app
- **Free Tier**: $5 credit/month
- **Setup Time**: 5 minutes

#### Option C: Neon (Serverless Postgres)
- **URL**: https://neon.tech
- **Free Tier**: Generous free tier
- **Setup Time**: 5 minutes

#### Option D: Self-Hosted PostgreSQL
- Install PostgreSQL on your server
- Requires server management knowledge
- Best for: Full control and large scale

### Step 2: Set Up Database (Using Supabase - Example)

1. **Create Supabase Account**
   - Go to: https://supabase.com
   - Sign up with GitHub or Email
   - Create a new project

2. **Get Database Credentials**
   - In your project dashboard, go to **Settings** → **Database**
   - Find **Connection string** section
   - Copy the **URI** connection string
   - It looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.[project-ref].supabase.co:5432/postgres`
   - **Your Project ID**: `zluobcnwugtfzixelcwt` (from your project)

3. **Extract Connection Details**
   - **Host**: `db.zluobcnwugtfzixelcwt.supabase.co` (replace with your actual project ID)
   - **Port**: `5432`
   - **Database**: `postgres`
   - **User**: `postgres`
   - **Password**: The password you set when creating the project (or reset it in Settings → Database)
   - **SSL**: Required (Supabase uses SSL)
   
   **Example with your project ID:**
   - Host: `db.zluobcnwugtfzixelcwt.supabase.co`
   - Full connection string format: `postgresql://postgres:[PASSWORD]@db.zluobcnwugtfzixelcwt.supabase.co:5432/postgres`

### Step 3: Create the Appointments Table

1. **Open SQL Editor in Supabase**
   - In Supabase dashboard, go to **SQL Editor**
   - Click **New Query**

2. **Run This SQL to Create Table:**
   ```sql
   CREATE TABLE IF NOT EXISTS appointments (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255),
     email VARCHAR(255) NOT NULL,
     duration VARCHAR(10),
     date VARCHAR(100),
     time VARCHAR(100),
     purpose TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Create an index on email for faster lookups
   CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);
   
   -- Create an index on created_at for sorting
   CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at);
   ```

3. **Verify Table Creation**
   - Go to **Table Editor** in Supabase
   - You should see the `appointments` table with columns

### Step 4: Configure Postgres Credentials in n8n

1. **Open n8n**
   - Log into your n8n instance

2. **Go to Credentials**
   - Click your profile icon (top right) → "Credentials"
   - Or go to: Settings → Credentials

3. **Create New Credential**
   - Click "Add Credential"
   - Search for "Postgres"
   - Select "Postgres" credential type

4. **Fill in Database Details**
   - **Credential Name**: `Nova Appointments DB` or similar
   - **Host**: Your database host (e.g., `db.xxxxx.supabase.co`)
   - **Port**: `5432` (default PostgreSQL port)
   - **Database**: `postgres` (or your database name)
   - **User**: `postgres` (or your database username)
   - **Password**: Your database password
   - **SSL**: ✅ Check this box (required for cloud databases)
   - **SSL Mode**: Select `require` or `prefer`

5. **Test Connection** (if available)
   - Some n8n versions have a "Test" button
   - Click it to verify credentials work

6. **Save**
   - Click "Save" to store the credential

### Step 5: Configure Database Node in Workflow

1. **Open Your Workflow**
   - Import or open: `n8n-workflow-nova-voice-agent-advanced.json`

2. **Find Database Node**
   - Look for "Store in DB" node (Postgres node)
   - Click on it to edit

3. **Select Postgres Credential**
   - Under "Credential for Postgres", select your credential from Step 4

4. **Configure Query** (Already set in workflow, but verify)
   - The node should have:
     - **Operation**: `Execute Query`
     - **Query**: 
       ```sql
       INSERT INTO appointments (name, email, duration, date, time, purpose, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       ```
   - Or using the workflow's expression format:
     ```
     INSERT INTO appointments (name, email, duration, date, time, purpose, created_at) 
     VALUES ({{$json.structured.name || 'NULL'}}, {{$json.structured.email || 'NULL'}}, 
             {{$json.structured.duration || 'NULL'}}, {{$json.structured.date || 'NULL'}}, 
             {{$json.structured.time || 'NULL'}}, {{$json.structured.purpose || 'NULL'}}, NOW())
     ```

5. **Save Workflow**
   - Click "Save" to save the workflow

### Step 6: Test Database Storage

1. **Activate Workflow**
   - Make sure the workflow is ACTIVE (toggle in top-right)

2. **Test via Nova**
   - Open your website
   - Use Nova to book a test appointment
   - Complete the booking flow with:
     - Name
     - Email
     - Duration (15 or 30)
     - Date and time

3. **Verify in Database**
   - Go to your database dashboard (Supabase Table Editor, etc.)
   - Check the `appointments` table
   - You should see a new row with the appointment data

## 🔧 Database Schema Details

### Appointments Table Structure

| Column | Type | Description | Nullable |
|--------|------|-------------|----------|
| `id` | SERIAL | Auto-incrementing primary key | No |
| `name` | VARCHAR(255) | Customer name | Yes |
| `email` | VARCHAR(255) | Customer email | No |
| `duration` | VARCHAR(10) | Meeting duration (15 or 30) | Yes |
| `date` | VARCHAR(100) | Appointment date | Yes |
| `time` | VARCHAR(100) | Appointment time | Yes |
| `purpose` | TEXT | Meeting purpose/notes | Yes |
| `created_at` | TIMESTAMP | When record was created | No (auto) |

### Alternative Schema (Using Proper Date Types)

If you want to use proper DATE and TIME types instead of VARCHAR:

```sql
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  duration INTEGER, -- 15 or 30 (in minutes)
  appointment_date DATE,
  appointment_time TIME,
  purpose TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
```

**Note**: This requires updating the workflow to format dates properly. The VARCHAR approach is simpler and works with the current workflow.

## 🐛 Troubleshooting

### "Connection Refused" Error

**Problem**: Can't connect to database.

**Solution**:
1. Verify host and port are correct
2. Check if database allows connections from your IP (for cloud providers)
3. Verify SSL is enabled if required
4. Check firewall settings

### "Table Does Not Exist" Error

**Problem**: The `appointments` table hasn't been created.

**Solution**:
1. Go to your database SQL editor
2. Run the CREATE TABLE query from Step 3
3. Verify table exists in table editor

### "SSL Required" Error

**Problem**: Cloud databases require SSL connection.

**Solution**:
1. In n8n credential, check **SSL** checkbox
2. Set **SSL Mode** to `require` or `prefer`
3. For Supabase/Neon, SSL is mandatory

### "Authentication Failed" Error

**Problem**: Wrong username or password.

**Solution**:
1. Double-check credentials in database provider dashboard
2. Verify you're using the correct database user
3. Reset password if needed
4. Make sure password doesn't contain special characters that need escaping

### "Permission Denied" Error

**Problem**: Database user doesn't have INSERT permission.

**Solution**:
1. Make sure you're using the correct database user
2. For Supabase/cloud providers, the default `postgres` user should work
3. Check database user permissions

## 📊 Querying Stored Appointments

### View All Appointments

```sql
SELECT * FROM appointments ORDER BY created_at DESC;
```

### View Today's Appointments

```sql
SELECT * FROM appointments 
WHERE date LIKE '%today%' OR date LIKE CURRENT_DATE::text
ORDER BY time;
```

### Count Appointments by Duration

```sql
SELECT duration, COUNT(*) as count 
FROM appointments 
GROUP BY duration;
```

### Find Appointments by Email

```sql
SELECT * FROM appointments 
WHERE email = 'customer@example.com'
ORDER BY created_at DESC;
```

## 🔒 Security Best Practices

1. **Use Environment Variables for Credentials**
   - Store database credentials in n8n environment variables
   - Don't hardcode credentials in workflows

2. **Limit Database Access**
   - Use a dedicated database user with limited permissions
   - Only grant INSERT, SELECT permissions (not DELETE/UPDATE unless needed)

3. **Enable SSL**
   - Always use SSL for production databases
   - Required for cloud providers anyway

4. **Regular Backups**
   - Set up automated backups in your database provider
   - Keep backups for at least 30 days

## ✅ Setup Checklist

- [ ] Chosen database provider
- [ ] Database created and credentials obtained
- [ ] `appointments` table created
- [ ] Postgres credential created in n8n
- [ ] Tested database connection
- [ ] Database node configured in workflow
- [ ] Tested appointment storage via workflow
- [ ] Verified data in database table

## 🎉 Next Steps

Once database is configured:
1. ✅ All appointments are automatically stored
2. ✅ You can query appointments for reporting
3. ✅ Data persists even if workflow restarts
4. ✅ You can build a dashboard to view bookings
5. ✅ Export data for analytics

## 💡 Advanced: View Appointments Dashboard

You can create a simple dashboard by:
1. Using Supabase Dashboard (built-in Table Editor)
2. Creating a simple Next.js page to display appointments
3. Using a BI tool like Metabase, Retool, or Airtable

---

**Need help?** Check your database provider's documentation or n8n's Postgres node documentation.

