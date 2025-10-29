import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';

// Initialize Slack client with bot token
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, agencyName, creatorCount } = body;

    // Validate required fields
    if (!name || !agencyName || !creatorCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the Slack message
    const message = {
      channel: process.env.SLACK_CHANNEL_ID,
      text: "🎯 New Agency Lead!",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Agency Lead"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Agency:*\n${agencyName}`
            },
            {
              type: "mrkdwn",
              text: `*Creators:*\n${creatorCount}`
            },
            {
              type: "mrkdwn",
              text: `*Time:*\n${new Date().toLocaleString()}`
            }
          ]
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "View Form"
              },
              url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/agencies`,
              style: "primary"
            }
          ]
        }
      ]
    };

    // Send message to Slack
    const result = await slack.chat.postMessage(message);

    if (result.ok) {
      return NextResponse.json(
        { success: true, message: 'Lead sent to Slack successfully' },
        { status: 200 }
      );
    } else {
      console.error('Slack API error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send message to Slack' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in Slack API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
