# Slack Integration Setup Guide

## 🚀 Quick Setup

### 1. Create a Slack App
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Name it "Agency Leads" and select your workspace

### 2. Enable Incoming Webhooks
1. In your app settings, go to "Incoming Webhooks"
2. Toggle "Activate Incoming Webhooks" to ON
3. Click "Add New Webhook to Workspace"
4. Choose the channel where you want notifications
5. Copy the webhook URL (starts with `https://hooks.slack.com/services/`)

### 3. Set Environment Variable
Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### 4. Test the Integration
1. Start your dev server: `npm run dev`
2. Go to `/agencies` and submit the form
3. Check your Slack channel for the notification!

## 📱 What You'll See in Slack

When someone submits the form, you'll get a rich message with:
- 🎯 Header: "New Agency Lead"
- **Name**: The person's name
- **Agency**: Agency name
- **Creators**: Number of creators
- **Time**: Submission timestamp
- **Button**: "View Form" to go back to the page

## 🔧 Alternative: Zapier Integration

If you prefer Zapier:
1. Create a Zapier account
2. Set up a "Webhook" trigger
3. Use the webhook URL in your form
4. Connect to Slack as the action

## 🛠️ Customization

You can modify the Slack message format in `/app/agencies/page.tsx` around line 35-81.

## 🔒 Security Note

The webhook URL is public in the environment variable. For production, consider:
- Using a server-side API route instead
- Adding form validation
- Implementing rate limiting
