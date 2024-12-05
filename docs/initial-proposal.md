# Initial Proposal

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Tasks](#tasks)
- [Design & Develop](#design--develop)
  - [Design Page Layouts](#design-page-layouts)
  - [Implement Page Components](#implement-page-components)
- [CRM](#crm)
  - [Define Pages/Add Content](#define-pagesadd-content)
  - [Read Content into App](#read-content-into-app)
  - [Watch for Content Changes](#watch-for-content-changes)

<!-- /code_chunk_output -->

A combination React SPA and Node.js watchdog. Bespoke graphics and layouts are baked with dynamic content written in Markdown documents.

The React SPA is written as a client-sided Typescript application generated and built by Vite. The React app is built and deployed by the watchdog.

The Node.js watchdog is a thin wrapper for dynamic content generation. The Node server watches for file changes on the disk and provides Markdown generated pages and content as standard markup for the React app to display. The watchdog is also responsible for caching subsequent requests and the initial generation of dynamic content during program start.

## Tasks

- [ ] Create common components
  - [ ] Typography
    - [ ] Links
    - [ ] Headers
    - [ ] Body/content
    - [ ] Highlights
    - [ ] Tooltips/callouts
  - [ ] Blocks/sections
    - [ ] Quotes/asides
    - [ ] Code blocks
  - [ ] Forms, inputs, and buttons
    - [ ] Validations/messages
    - [ ] Tooltips
  - [ ] Header
    - [ ] Identity
    - [ ] Navigation
    - [ ] Breadcrumbs
    - [ ] Build information
  - [ ] Footer
    - [ ] Sitemap
    - [ ] Social media/company pages
    - [ ] Contact information
    - [ ] Legal information
- [ ] Create page layouts
  - [ ] Home page
  - [ ] Generic page
  - [ ] Blog page
- [ ] Add pages/write content
  - [ ] Overview/Home
  - [ ] Company/About Us
- [ ] Create SPA
  - [ ] Implement application wrapper
  - [ ] Create routing
  - [ ] Implement breadcrumbs
- [ ] Finalize design/QA

## Design & Develop

### Design Page Layouts

### Implement Page Components

## CRM

### Define Pages/Add Content

### Read Content into App

### Watch for Content Changes
