# SACCO Management System - Development Guide

## Code Standards

### TypeScript

- Enable strict mode
- Use explicit return types
- Avoid `any` types
- Use interfaces for object shapes

### Naming Conventions

- **Files**: camelCase with descriptive names
- **Classes**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Variables**: camelCase

### Code Style

```bash
# Run linter
npm run lint

# Format code
npm run format
```

## Creating a New Feature

### Example: Adding a New Endpoint

#### 1. Create Model

`backend/src/models/NewFeature.ts`

```typescript
interface NewFeature {
  id: number;
  name: string;
  createdAt: Date;
}

export default NewFeature;
```

#### 2. Create Service

`backend/src/services/newFeatureService.ts`

```typescript
import NewFeature from '../models/NewFeature';

class NewFeatureService {
  async getAll(): Promise<NewFeature[]> {
    // Business logic
  }

  async getById(id: number): Promise<NewFeature | null> {
    // Business logic
  }
}

export default new NewFeatureService();
```

#### 3. Create Controller

`backend/src/controllers/newFeatureController.ts`

```typescript
import { Request, Response } from 'express';
import newFeatureService from '../services/newFeatureService';

export const getAll = async (req: Request, res: Response) => {
  const data = await newFeatureService.getAll();
  res.json(data);
};

export const getById = async (req: Request, res: Response) => {
  const data = await newFeatureService.getById(Number(req.params.id));
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
```

#### 4. Create Routes

`backend/src/routes/newFeature.ts`

```typescript
import { Router } from 'express';
import * as controller from '../controllers/newFeatureController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

/**
 * @swagger
 * /api/features:
 *   get:
 *     description: Get all features
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);

export default router;
```

#### 5. Register Routes in App

`backend/src/app.ts`

```typescript
import newFeatureRoutes from './routes/newFeature';

app.use('/api/features', newFeatureRoutes);
```

## Testing

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Writing Tests

```typescript
describe('NewFeatureService', () => {
  it('should get all features', async () => {
    const result = await newFeatureService.getAll();
    expect(result).toBeArray();
  });
});
```

## Database Migrations

### Creating a Migration

```bash
cd backend
npm run migrate:create -- --name add_new_table
```

### Writing Migration

```typescript
export async function up(query) {
  await query(`
    CREATE TABLE new_feature (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function down(query) {
  await query('DROP TABLE IF EXISTS new_feature');
}
```

## Debugging

### Backend Debugging

1. Use VS Code debugger
2. Add breakpoints
3. Run: `npm run debug`

### Frontend Debugging

1. Open Chrome DevTools
2. Use React DevTools extension
3. Check network requests

## Git Workflow

### Branch Naming

- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `hotfix/issue-name` - Production fixes

### Commit Message

```
<type>: <subject>

<body>

<footer>
```

Types: feat, fix, docs, style, refactor, test, chore

## Common Issues

### CORS Errors

Update `CORS_ORIGIN` in `.env`

### Database Connection Failed

1. Check PostgreSQL is running
2. Verify credentials in `.env`
3. Check database exists

### Module Not Found

```bash
rm -rf node_modules
npm install
```
