import { test, expect } from '@playwright/test'

test.describe('JavaScript Roast App', () => {
  test('should load the main page and display key content', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://localhost:3002')
    
    // Check if the main title is present
    await expect(page.locator('h1')).toContainText('The State of JS: A Visceral Takedown')
    
    // Check if the subtitle is present
    await expect(page.locator('.subtitle')).toContainText('Learning JavaScript in 2016')
    
    // Check if the roast sections are present
    await expect(page.locator('.roast-title').first()).toContainText('Remember 2016?')
    
    // Check if framework cards are present
    await expect(page.locator('.framework-card')).toHaveCount(3)
    
    // Check if the Bun showcase is present
    await expect(page.locator('.bun-title')).toContainText('Enter Bun: The Chosen One')
    
    // Check if tech badges are present
    await expect(page.locator('.tech-badge')).toHaveCount(4)
    
    // Verify some specific roast content (use first occurrence)
    await expect(page.locator('text=JavaScript fatigue').first()).toBeVisible()
    await expect(page.locator('text=José Luis Antúnez')).toBeVisible()
  })
  
  test('should have working interactive elements', async ({ page }) => {
    await page.goto('http://localhost:3002')
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle')
    
    // Check if ApexCharts loaded and rendered (charts should be present)
    await page.waitForTimeout(3000) // Wait for charts to render
    const chartContainers = page.locator('#satisfactionChart, #complexityChart')
    await expect(chartContainers).toHaveCount(2)
    
    // Check if charts actually rendered (ApexCharts creates SVG elements)
    const chartSvgs = page.locator('#satisfactionChart svg, #complexityChart svg')
    await expect(chartSvgs.first()).toBeVisible() // At least one chart should be visible
    
    // Check if GSAP loaded (look for animated elements)
    const heroTitle = page.locator('.hero h1')
    await expect(heroTitle).toBeVisible()
    
    // Check hover effects on framework cards (skip on mobile)
    if (!page.viewportSize()?.width || page.viewportSize()!.width > 768) {
      const firstCard = page.locator('.framework-card').first()
      await firstCard.hover()
    }
    
    // Check if external scripts loaded
    const apexScript = page.locator('script[src*="apexcharts"]')
    const gsapScript = page.locator('script[src*="gsap"]')
    await expect(apexScript).toBeAttached()
    await expect(gsapScript).toBeAttached()
  })
  
  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('http://localhost:3002')
    
    const frameworkGrid = page.locator('.framework-evolution')
    await expect(frameworkGrid).toBeVisible()
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await page.reload()
    
    // Should still be visible and readable
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('.framework-card')).toHaveCount(3)
  })
  
  test('should have proper meta tags and structure', async ({ page }) => {
    await page.goto('http://localhost:3002')
    
    // Check page title
    await expect(page).toHaveTitle('The State of JS: A Visceral Takedown 2024')
    
    // Check viewport meta tag
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0')
    
    // Check charset
    const charset = page.locator('meta[charset]')
    await expect(charset).toHaveAttribute('charset', 'UTF-8')
    
    // Check if favicon is set
    const favicon = page.locator('link[rel="icon"]')
    await expect(favicon).toBeAttached()
  })
})
