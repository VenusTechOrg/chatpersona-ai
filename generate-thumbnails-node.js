const fs = require('fs');
const path = require('path');

// Create a Node.js script to generate unique thumbnails
const blogThumbnails = [
    {
        filename: 'ai-revenue-revolution.webp',
        gradient: ['#667eea', '#764ba2'],
        emoji: '💰',
        title: 'AI Revenue Revolution',
        subtitle: '300-500% Revenue Increase'
    },
    {
        filename: 'psychology-fan-interactions.webp',
        gradient: ['#f093fb', '#f5576c'],
        emoji: '🧠',
        title: 'Psychology Behind AI Fan Interactions',
        subtitle: 'Building Genuine Connections'
    },
    {
        filename: 'building-ai-persona.webp',
        gradient: ['#4facfe', '#00f2fe'],
        emoji: '🤖',
        title: 'Building Your AI Persona',
        subtitle: 'Complete Creator Guide'
    },
    {
        filename: 'ai-monetization-strategies.webp',
        gradient: ['#43e97b', '#38f9d7'],
        emoji: '💎',
        title: 'Maximizing Revenue with AI',
        subtitle: 'Advanced Monetization'
    },
    {
        filename: 'future-creator-economy.webp',
        gradient: ['#fa709a', '#fee140'],
        emoji: '🚀',
        title: 'Future of Creator Economy',
        subtitle: 'AI Integration Trends'
    },
    {
        filename: 'ai-chatbot-security.webp',
        gradient: ['#667eea', '#764ba2'],
        emoji: '🔒',
        title: 'AI Chatbot Security',
        subtitle: 'Protecting Creator Data'
    },
    {
        filename: 'emotional-connection-ai.webp',
        gradient: ['#ff9a9e', '#fecfef'],
        emoji: '💝',
        title: 'Emotional Connection',
        subtitle: 'Building Deeper Relationships'
    },
    {
        filename: 'ai-first-creator-platforms.webp',
        gradient: ['#a8edea', '#fed6e3'],
        emoji: '🏗️',
        title: 'AI-First Creator Platforms',
        subtitle: 'Technology Reshaping Monetization'
    },
    {
        filename: 'onlyfans-ai-revenue-guide.webp',
        gradient: ['#ffecd2', '#fcb69f'],
        emoji: '💳',
        title: 'OnlyFans AI Revenue Guide',
        subtitle: 'Complete Creator Guide'
    }
];

// Create HTML content for generating thumbnails
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate All Thumbnails</title>
    <style>
        body { margin: 0; padding: 20px; background: #f5f5f5; font-family: Arial, sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { text-align: center; color: #333; margin-bottom: 30px; }
        .thumbnail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .thumbnail { width: 300px; height: 200px; border-radius: 15px; position: relative; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 0 auto; }
        .download-btn { background: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 12px; margin: 5px; }
        .download-all-btn { background: #2196F3; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; display: block; margin: 20px auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Generate All Unique Thumbnails</h1>
        <div class="thumbnail-grid">
            ${blogThumbnails.map((blog, index) => `
                <div class="thumbnail" id="blog${index + 1}" style="background: linear-gradient(135deg, ${blog.gradient[0]} 0%, ${blog.gradient[1]} 100%);">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; box-sizing: border-box;">
                        <div style="font-size: 48px; margin-bottom: 15px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">${blog.emoji}</div>
                        <div style="font-size: 18px; font-weight: bold; color: white; margin-bottom: 8px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); line-height: 1.2;">${blog.title}</div>
                        <div style="font-size: 14px; color: rgba(255,255,255,0.9); text-shadow: 0 1px 2px rgba(0,0,0,0.5); line-height: 1.3;">${blog.subtitle}</div>
                        <button class="download-btn" onclick="downloadThumbnail(${index + 1}, '${blog.filename}')">Download</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="download-all-btn" onclick="downloadAllThumbnails()">Download All Thumbnails</button>
    </div>

    <script>
        const blogData = ${JSON.stringify(blogThumbnails, null, 2)};

        function downloadThumbnail(blogId, filename) {
            const blog = blogData.find(b => b.filename === filename);
            if (!blog) return;

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = 600;
            canvas.height = 400;
            ctx.scale(2, 2);
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, 300, 200);
            gradient.addColorStop(0, blog.gradient[0]);
            gradient.addColorStop(1, blog.gradient[1]);
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 300, 200);
            
            // Add decorative circles
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(250, 150, 15, 0, 2 * Math.PI);
            ctx.fill();
            
            // Add emoji icon
            ctx.font = '96px Arial';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.shadowColor = 'rgba(0,0,0,0.3)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            ctx.fillText(blog.emoji, 150, 160);
            
            // Add title
            ctx.font = 'bold 36px Arial';
            ctx.fillStyle = 'white';
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 2;
            ctx.fillText(blog.title, 150, 240);
            
            // Add subtitle
            ctx.font = '28px Arial';
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 2;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;
            ctx.fillText(blog.subtitle, 150, 280);
            
            // Download the image
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        function downloadAllThumbnails() {
            blogData.forEach((blog, index) => {
                setTimeout(() => {
                    downloadThumbnail(index + 1, blog.filename);
                }, index * 500);
            });
        }
    </script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync('generate-all-thumbnails-final.html', htmlContent);
console.log('✅ Final thumbnail generator created: generate-all-thumbnails-final.html');
console.log('📝 This file contains all 9 unique thumbnails with different gradients and icons');
console.log('🎯 Open this file in your browser and download all thumbnails to replace the duplicates');
