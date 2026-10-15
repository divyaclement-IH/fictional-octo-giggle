# UI Components

Reusable UI components from the Included Health design system.

## TabNavigation

Full-width tab navigation component for switching between 2-3 content sections.

### Usage

```tsx
import { TabNavigation } from './components/ui/tab-navigation';

const tabs = [
  { id: 'activity', label: 'Activity' },
  { id: 'medicine', label: 'Medicine' },
  { id: 'care-team', label: 'Care Team' }
];

<TabNavigation
  tabs={tabs}
  activeTabId="activity"
  onTabChange={(tabId) => console.log(tabId)}
/>
```

### Important Notes

**Full Width Behavior:**
- Tabs MUST span the full width of their container
- Each tab distributes evenly using `flex-[1_0_0]` (equal width distribution)
- The parent container should have an explicit width (`w-full` or `w-[375px]` for mobile)
- Supports 2-3 tabs; each tab will take equal width regardless of label length

**Styling:**
- Active tab: Bold blue text (`#0012e7`) with 4px blue bottom border
- Inactive tab: Medium gray text (`#3b3b3b`)
- Container height: 48px
- Font size: 12px
- Padding: 16px horizontal, 8px vertical

### Design Source

Imported from Figma designs at `/src/imports/Tabs/` with variants for:
- 3 tabs (Activity, Medicine, Care Team)
- 2 tabs (Tab 1, Tab 2)

### Props

| Prop | Type | Description |
|------|------|-------------|
| `tabs` | `Tab[]` | Array of tab objects with `id` and `label` |
| `activeTabId` | `string` | ID of the currently active tab |
| `onTabChange` | `(tabId: string) => void` | Callback when tab is clicked |

### Examples

#### 3-Tab Navigation (My Health)
```tsx
<div className="w-full">
  <TabNavigation
    tabs={[
      { id: 'activity', label: 'Activity' },
      { id: 'medicine', label: 'Medicine' },
      { id: 'care-team', label: 'Care Team' }
    ]}
    activeTabId="activity"
    onTabChange={handleTabChange}
  />
</div>
```

#### 2-Tab Navigation
```tsx
<div className="w-[375px]">
  <TabNavigation
    tabs={[
      { id: 'services', label: 'Services' },
      { id: 'for-you', label: 'For You' }
    ]}
    activeTabId="services"
    onTabChange={handleTabChange}
  />
</div>
```
