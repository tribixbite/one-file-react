// The most beautiful, visceral takedown of JavaScript's evolution
// Rendered with Bun's native TSX support - no build step required!

import React from "react"

function App() {
  return (
    <html lang="en">
      <head>
        <title>The State of JS: A Visceral Takedown 2025</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
        
        {/* Load ApexCharts from JSDelivr CDN */}
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
        
        <style dangerouslySetInnerHTML={{__html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Fira Code', monospace;
            background: #0a0a0a;
            color: #f0f0f0;
            line-height: 1.6;
            overflow-x: hidden;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          
          .hero {
            text-align: center;
            padding: 6rem 0;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 50%, #1e3a8a 100%);
            border-radius: 20px;
            margin: 2rem 0;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
          }
          
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="1" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            pointer-events: none;
          }
          
          .hero h1 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            font-weight: 900;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 4s ease-in-out infinite;
            margin-bottom: 1rem;
            position: relative;
            z-index: 1;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 200% 50%; }
            75% { background-position: 300% 50%; }
          }
          
          .subtitle {
            font-size: 1.4rem;
            color: #94a3b8;
            margin-bottom: 2rem;
            position: relative;
            z-index: 1;
          }
          
          .roast-section {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d1435 100%);
            border-radius: 20px;
            padding: 3rem;
            margin: 3rem 0;
            border: 1px solid #333;
            position: relative;
            overflow: hidden;
          }
          
          .roast-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
          }
          
          .roast-title {
            font-size: 2.2rem;
            font-weight: 800;
            color: #ff6b6b;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .roast-title::before {
            content: '🔥';
            font-size: 2rem;
          }
          
          .roast-text {
            font-size: 1.2rem;
            color: #e2e8f0;
            margin-bottom: 1.5rem;
            line-height: 1.8;
          }
          
          .framework-evolution {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
          }
          
          .framework-card {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border: 1px solid #475569;
            border-radius: 15px;
            padding: 2.5rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            opacity: 1 !important; /* Ensure always visible by default */
            transform: translateY(0) !important; /* Reset any transform */
          }
          
          .framework-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, rgba(78, 205, 196, 0.1), transparent);
            animation: rotate 8s linear infinite;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          
          .framework-card:hover::before {
            opacity: 1;
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .framework-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: #4ecdc4;
            box-shadow: 0 20px 40px rgba(78, 205, 196, 0.2);
          }
          
          .framework-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #4ecdc4;
            position: relative;
            z-index: 1;
          }
          
          .framework-description {
            color: #cbd5e1;
            margin-bottom: 1.5rem;
            line-height: 1.7;
            position: relative;
            z-index: 1;
          }
          
          .data-viz-section {
            margin: 5rem 0;
            padding: 4rem;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            border-radius: 25px;
            position: relative;
          }
          
          .viz-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #4ecdc4;
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .charts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 3rem;
            margin: 3rem 0;
          }
          
          .chart-container {
            background: rgba(15, 23, 42, 0.8);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid #334155;
          }
          
          .chart-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .bun-showcase {
            background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%);
            border-radius: 25px;
            padding: 4rem;
            margin: 4rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .bun-showcase::before {
            content: '⚡';
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 4rem;
            opacity: 0.3;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          
          .bun-title {
            font-size: 3rem;
            font-weight: 900;
            color: white;
            margin-bottom: 1.5rem;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          
          .bun-description {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 800px;
            margin: 0 auto 3rem;
            line-height: 1.8;
          }
          
          .bun-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .stat-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
          
          .stat-number {
            font-size: 2.5rem;
            font-weight: 900;
            color: #fbbf24;
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 600;
          }
          
          .conclusion {
            text-align: center;
            padding: 4rem;
            background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
            border-radius: 20px;
            margin: 4rem 0;
            border: 1px solid #374151;
          }
          
          .conclusion h2 {
            font-size: 2.5rem;
            color: #4ecdc4;
            margin-bottom: 2rem;
            font-weight: 800;
          }
          
          .conclusion p {
            font-size: 1.2rem;
            color: #d1d5db;
            max-width: 700px;
            margin: 0 auto 2rem;
            line-height: 1.8;
          }
          
          .tech-badge {
            display: inline-block;
            background: linear-gradient(45deg, #4ecdc4, #45b7d1);
            color: #0a0a0a;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-weight: 700;
            font-size: 0.9rem;
            margin: 0.25rem;
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 1rem;
            }
            
            .hero {
              padding: 3rem 0;
            }
            
            .framework-evolution {
              grid-template-columns: 1fr;
            }
            
            .charts-grid {
              grid-template-columns: 1fr;
            }
            
            .bun-stats {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .roast-section, .data-viz-section, .bun-showcase {
              padding: 2rem;
            }
          }
        `}} />
      </head>
      <body>
        <div className="container">
          <div className="hero">
            <h1>The State of JS: A Visceral Takedown</h1>
            <p className="subtitle">From "Learning JavaScript in 2016" to "Just Use Bun" in 2025</p>
            <div style={{marginTop: '2rem'}}>
              <span className="tech-badge">Built with Bun</span>
              <span className="tech-badge">Native TSX</span>
              <span className="tech-badge">Zero Config</span>
              <span className="tech-badge">Pure Roast</span>
            </div>
          </div>
          
          <div className="roast-section">
            <h2 className="roast-title">Remember 2016?</h2>
            <p className="roast-text">
              "I want to learn JavaScript" you said. "Just build a simple app" you said. 
              Then came the avalanche: Webpack, Babel, ESLint, Prettier, Jest, Enzyme, 
              Redux, Thunk, Saga, Immutable.js, and oh god why are there 47 different 
              ways to handle CSS and someone just released React Router v4 which breaks everything again.
            </p>
            <p className="roast-text">
              José Luis Antúnez's infamous HackerNoon article "How it feels to learn JavaScript in 2016" 
              hit us like a freight train of truth. We were drowning in tooling, lost in a sea of boilerplate, 
              and spending more time configuring than creating. The JavaScript fatigue was REAL.
            </p>
            <p className="roast-text">
              But here's the plot twist: we survived. And we learned something beautiful in the process.
            </p>
          </div>
          <div className="framework-evolution">
            <div className="framework-card">
              <h3 className="framework-title">React 2016 → 2025</h3>
              <p className="framework-description">
                <strong>2016:</strong> "It's just a view library!" *proceeds to need Redux, Router, and 47 other packages*
                <br/><br/>
                <strong>2025:</strong> Server Components, Suspense, and hooks that actually make sense. 
                Still the king, but now it's a wise king who learned from its mistakes.
              </p>
            </div>
            
            <div className="framework-card">
              <h3 className="framework-title">Vue's Steady Rise</h3>
              <p className="framework-description">
                While React was having its existential crisis about lifecycle methods, 
                Vue was quietly being the framework your mom would approve of. 
                Consistent, reliable, and actually enjoyable to use. The Composition API 
                was chef's kiss perfection.
              </p>
            </div>
            
            <div className="framework-card">
              <h3 className="framework-title">The Remix Revolution</h3>
              <p className="framework-description">
                "What if we made React, but like... actually good at being a web framework?" 
                Remix said, and proceeded to show us how to do server-side rendering without 
                wanting to quit programming. Revolutionary concept: web standards actually work!
              </p>
            </div>
          </div>
          
          <div className="roast-section">
            <h2 className="roast-title">The Great Convergence</h2>
            <p className="roast-text">
              Here's the beautiful irony: After years of framework wars, build tool battles, 
              and JavaScript fatigue, we've all converged on the same patterns:
            </p>
            <ul style={{fontSize: '1.2rem', color: '#e2e8f0', marginLeft: '2rem', marginBottom: '1.5rem'}}>
              <li>✅ Components are good (we figured this out)</li>
              <li>✅ Server-side rendering is necessary (duh)</li>
              <li>✅ File-based routing makes sense (finally)</li>
              <li>✅ TypeScript is non-negotiable (obviously)</li>
              <li>✅ Build tools should be fast and invisible (revolutionary!)</li>
            </ul>
            <p className="roast-text">
              The revolution isn't in the frameworks anymore—it's in the runtime. 
              We spent so much time arguing about React vs Vue vs Angular that we forgot 
              the real enemy was Node.js and its thousand-year boot time.
            </p>
          </div>
          
          <div className="data-viz-section">
            <h2 className="viz-title">The Data Tells the Story</h2>
            <div className="charts-grid">
              <div className="chart-container">
                <h3 className="chart-title">Framework Satisfaction Over Time</h3>
                <div id="satisfactionChart"></div>
              </div>
              <div className="chart-container">
                <h3 className="chart-title">Build Tool Complexity vs Satisfaction</h3>
                <div id="complexityChart"></div>
              </div>
            </div>
          </div>
          
          <div className="bun-showcase">
            <h2 className="bun-title">Enter Bun: The Chosen One</h2>
            <p className="bun-description">
              Bun looked at the JavaScript ecosystem and said "What if we made this... not suck?" 
              Then they built a runtime that's actually fast, with a bundler that doesn't require 
              a config file longer than the Constitution, and a package manager that doesn't take coffee breaks.
            </p>
            <p className="bun-description">
              <strong>This entire app?</strong> <strong>A single .tsx file. Zero config.</strong>
              <br/>No webpack. No babel. No node_modules bigger than the International Space Station. 
              Just pure, unadulterated web development joy.
            </p>
            
            <div className="bun-stats">
              <div className="stat-card">
                <div className="stat-number">3x</div>
                <div className="stat-label">Faster Runtime</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25x</div>
                <div className="stat-label">Faster Install</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster Bundling</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">0</div>
                <div className="stat-label">Config Files</div>
              </div>
            </div>
          </div>
          
          <div className="conclusion">
            <h2>The Moral of the Story</h2>
            <p>
              We survived the JavaScript apocalypse of 2016. We learned that sometimes 
              the best solution isn't another framework—it's a better foundation.
            </p>
            <p>
              We went from "I need 15 tools to add a click handler" to "bun run server.ts" 
              and everything just works. The future is here, and it's surprisingly simple.
            </p>
            <p style={{fontStyle: 'italic', color: '#4ecdc4', fontWeight: 'bold'}}>
              Welcome to the future, where creating a web app doesn't require a PhD in toolchain archaeology.
            </p>
          </div>
        </div>
        
        <script dangerouslySetInnerHTML={{__html: `
          // Initialize charts when page loads
          document.addEventListener('DOMContentLoaded', function() {
            // Framework satisfaction over time - ApexCharts
            const satisfactionOptions = {
              series: [
                {
                  name: 'React',
                  data: [70, 75, 85, 87, 88],
                  color: '#61dafb'
                },
                {
                  name: 'Vue',
                  data: [65, 80, 88, 89, 90],
                  color: '#4fc08d'
                },
                {
                  name: 'Angular',
                  data: [60, 58, 65, 66, 68],
                  color: '#dd1b16'
                }
              ],
              chart: {
                type: 'line',
                height: 300,
                background: 'transparent',
                toolbar: { show: false },
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 1200
                }
              },
              theme: { mode: 'dark' },
              xaxis: {
                categories: ['2016', '2018', '2020', '2022', '2025'],
                labels: { style: { colors: '#9ca3af' } }
              },
              yaxis: {
                labels: { style: { colors: '#9ca3af' } },
                title: { text: 'Satisfaction %', style: { color: '#9ca3af' } }
              },
              grid: {
                borderColor: '#374151',
                strokeDashArray: 3
              },
              stroke: {
                curve: 'smooth',
                width: 3
              },
              markers: {
                size: 6,
                strokeWidth: 2,
                hover: { size: 8 }
              },
              legend: {
                labels: { colors: '#e2e8f0' }
              },
              tooltip: {
                theme: 'dark',
                style: { fontSize: '14px' }
              }
            };
            
            const satisfactionChart = new ApexCharts(
              document.querySelector("#satisfactionChart"), 
              satisfactionOptions
            );
            satisfactionChart.render();
            
            // Build tool complexity vs satisfaction - ApexCharts Scatter
            const complexityOptions = {
              series: [
                {
                  name: '2016 Tools',
                  data: [
                    { x: 95, y: 40, name: 'Webpack' },
                    { x: 70, y: 65, name: 'Gulp' },
                    { x: 80, y: 50, name: 'Grunt' }
                  ],
                  color: '#ff6b6b'
                },
                {
                  name: '2025 Tools',
                  data: [
                    { x: 20, y: 98, name: 'Bun' },
                    { x: 40, y: 95, name: 'Vite' },
                    { x: 50, y: 90, name: 'esbuild' }
                  ],
                  color: '#4ecdc4'
                }
              ],
              chart: {
                type: 'scatter',
                height: 300,
                background: 'transparent',
                toolbar: { show: false },
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 1200,
                  animateGradually: { delay: 300 }
                }
              },
              theme: { mode: 'dark' },
              xaxis: {
                title: { text: 'Complexity %', style: { color: '#9ca3af' } },
                labels: { style: { colors: '#9ca3af' } },
                tickAmount: 5
              },
              yaxis: {
                title: { text: 'Satisfaction %', style: { color: '#9ca3af' } },
                labels: { style: { colors: '#9ca3af' } }
              },
              grid: {
                borderColor: '#374151',
                strokeDashArray: 3
              },
              markers: {
                size: 8,
                strokeWidth: 2,
                hover: { size: 12 }
              },
              legend: {
                labels: { colors: '#e2e8f0' }
              },
              tooltip: {
                theme: 'dark',
                custom: function({series, seriesIndex, dataPointIndex, w}) {
                  const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                  return '<div class="apex-tooltip" style="padding: 10px; background: #1f2937; border: 1px solid #374151; border-radius: 8px;">' +
                    '<div style="color: #e2e8f0; font-weight: 600;">' + data.name + '</div>' +
                    '<div style="color: #9ca3af;">Satisfaction: ' + data.y + '%</div>' +
                    '<div style="color: #9ca3af;">Complexity: ' + data.x + '%</div>' +
                    '</div>';
                }
              }
            };
            
            const complexityChart = new ApexCharts(
              document.querySelector("#complexityChart"), 
              complexityOptions
            );
            complexityChart.render();
            
            // Add some GSAP animations (simplified to avoid conflicts)
            gsap.from('.hero h1', {duration: 1, y: 50, opacity: 0, ease: 'power3.out'});
            gsap.from('.subtitle', {duration: 1, y: 30, opacity: 0, delay: 0.3, ease: 'power3.out'});
            
            // Ensure framework cards stay visible and animate in properly
            gsap.set('.framework-card', {opacity: 1, y: 0}); // Reset any potential issues
            gsap.from('.framework-card', {
              duration: 0.8, 
              y: 50, 
              opacity: 0, 
              stagger: 0.2, 
              delay: 0.5, 
              ease: 'power3.out'
            });
            
            // Animate chart containers when they come into view (simplified - no ScrollTrigger)
            gsap.from('.chart-container', {
              duration: 1,
              y: 30,
              opacity: 0,
              stagger: 0.2,
              delay: 2,
              ease: 'power3.out'
            });
          });
        `}} />
      </body>
    </html>
  )
}

export default App
