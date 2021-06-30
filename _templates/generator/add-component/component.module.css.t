---
to: "src/components/<%= componentSize %>s/<%= name %>/<%= name %>.module.css"
unless_exists: true
---
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}