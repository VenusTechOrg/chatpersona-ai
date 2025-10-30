import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';
import type { ChatPostMessageArguments } from '@slack/web-api';

// Initialize Slack client with bot token
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, agencyName, creatorCount, email, website, buildChatbot } = body;

    // Normalize and validate numeric creator count
    const creatorCountNum = Number(creatorCount);

    // Validate required fields
    if (!name || !agencyName || !Number.isFinite(creatorCountNum) || creatorCountNum < 1 || !email || !website || !buildChatbot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure Slack channel is configured
    const channelId = process.env.SLACK_CHANNEL_ID;
    if (!channelId) {
      return NextResponse.json(
        { error: 'Slack channel is not configured on the server' },
        { status: 500 }
      );
    }

    // Create the Slack message
    const message: ChatPostMessageArguments = {
      channel: channelId,
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
              text: `*Creators:*\n${Math.trunc(creatorCountNum)}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            },
            {
              type: "mrkdwn",
              text: `*Website:*\n${website}`
            },
            {
              type: "mrkdwn",
              text: `*Build Chatbot:*\n${buildChatbot === 'yes' ? 'Yes' : 'No'}`
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
