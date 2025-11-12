# Suggested Development Commands

## Starting the Applications

### Sanity Studio
```bash
cd studio
yarn start
```

### Web Frontend
```bash
cd web
yarn dev
```

## Building and Running

### Studio
```bash
cd studio
yarn build
```

### Web Frontend
```bash
cd web
yarn build    # Build for production
yarn start    # Start production server
```

## Development Tools

### Linting
```bash
cd web
yarn lint     # Run linter
```

### Storybook
```bash
cd web
yarn storybook # Start Storybook
```

## Project-Specific Commands

The project uses a custom layout with grid-based design for reports. The frontend fetches data from a Sanity backend using the project ID "mabo5ysy". Image URLs are processed through Sanity's image URL builder.