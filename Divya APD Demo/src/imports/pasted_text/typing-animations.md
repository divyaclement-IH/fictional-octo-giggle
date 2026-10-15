# Typing Dots & Text Streaming Implementation Guide

Use this prompt to implement the typing dots (ThinkingIndicator) and text streaming (TypingText) animations in your chat interface.

---

## Prompt for Implementation

```
I need to implement a natural, conversational typing experience for an AI assistant chat interface. This involves two animation components that work together:

1. **ThinkingIndicator** - Three animated dots that show while the AI is "thinking"
2. **TypingText** - Character-by-character text reveal that makes responses feel like they're being typed in real-time

## Component 1: ThinkingIndicator (Three Typing Dots)

### What it is:
A Lottie-based animation showing three dots bouncing up and down in sequence. This indicates that the AI is processing/thinking before responding.

### When to use it:
- **Before AI responses** - Show for 0.5-0.8 seconds before text starts typing
- **While processing** - Any time the AI needs to "think" (API calls, calculations)
- **Short messages** - Show for 0.5 seconds, then instantly reveal text
- **Long messages** - Show for 0.8 seconds, then start character-by-character typing

### Import and usage:

```tsx
import { ThinkingIndicator } from '@/app/components/animations/ThinkingIndicator';

// In your chat message rendering:
{isThinking && (
  <ThinkingIndicator width={24} height={24} />
)}
```

### Props:
- `width` - Width in pixels (default: 60, recommended: 24 for inline chat)
- `height` - Height in pixels (default: 24, recommended: 24 for inline chat)
- `className` - Optional CSS classes

### Visual placement:
The thinking indicator should appear **exactly where the text will appear**, not in a separate area. This creates a smooth transition from dots → text.

```tsx
// CORRECT - Same location
<div className="message-bubble">
  {isThinking ? (
    <ThinkingIndicator width={24} height={24} />
  ) : (
    <TypingText text={message} />
  )}
</div>

// WRONG - Different locations
<div>{isThinking && <ThinkingIndicator />}</div>
<div>{!isThinking && <TypingText text={message} />}</div>
```

---

## Component 2: TypingText (Character-by-Character Streaming)

### What it is:
A component that reveals text one character at a time, creating a typewriter effect. Makes AI responses feel more natural and conversational.

### When to use it:
- **All AI/assistant responses** - Dot, Sarah, any bot character
- **Long messages** - Messages over 20 characters benefit from streaming
- **Conversational content** - Anything that should feel "typed" rather than instantly appearing

### When NOT to use it:
- **User messages** - User's own messages appear instantly
- **System messages** - Timestamps, notifications appear instantly  
- **Short confirmations** - "OK", "Yes", "Got it" can appear instantly

### Import and usage:

```tsx
import { TypingText } from '@/app/components/animations/TypingText';

// Basic usage - AI response typing out
<TypingText
  text="Based on your symptoms, I recommend scheduling an appointment."
  speed={30}
  cursor={false}
  loop={false}
  className="text-gray-900"
/>

// Input field cursor (no text, just blinking cursor)
<TypingText
  text=""
  cursor={true}
  className="text-gray-600"
/>
```

### Props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | (required) | The full text to type out |
| `speed` | number | 50 | Milliseconds per character (30 = fast, 50 = medium, 80 = slow) |
| `cursor` | boolean | true | Show blinking cursor at end? |
| `loop` | boolean | false | Restart animation when complete? |
| `delay` | number | 0 | Delay in ms before starting |
| `onComplete` | function | undefined | Callback when typing finishes |
| `className` | string | '' | CSS classes for text styling |

### How it works internally:

1. **On mount**, component starts with empty displayed text
2. **Every X milliseconds** (defined by `speed` prop), add one more character
3. **Characters reveal** from left to right: "H" → "He" → "Hel" → "Hell" → "Hello"
4. **When complete**, call `onComplete` callback and stop
5. **Cursor blinks** continuously if `cursor={true}`

### Speed recommendations:

```tsx
// Fast (snappy, professional)
speed={25}  // 25ms per character

// Medium (natural, conversational) - RECOMMENDED
speed={30}  // 30ms per character - This is what we use

// Slow (dramatic, emphasis)
speed={50}  // 50ms per character

// Calculate total time: 
// "Hello world" (11 chars) at 30ms = 330ms total
// "Your appointment is confirmed" (30 chars) at 30ms = 900ms total
```

---

## Complete Flow: Thinking → Typing

Here's how to implement the complete sequence where dots appear, then text types out:

### Step 1: Set up state to track thinking vs typing

```tsx
interface Message {
  id: string;
  speaker: 'user' | 'assistant';
  text: string;
  isThinking?: boolean;  // Add this flag
}

const [messages, setMessages] = useState<Message[]>([]);
```

### Step 2: When AI responds, add message with isThinking=true

```tsx
function handleAIResponse(responseText: string) {
  const messageId = `msg-${Date.now()}`;
  
  // First, add the message in "thinking" state
  setMessages(prev => [...prev, {
    id: messageId,
    speaker: 'assistant',
    text: '',  // Empty initially
    isThinking: true
  }]);
  
  // After 800ms, switch to typing state
  setTimeout(() => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId
        ? { ...msg, text: responseText, isThinking: false }
        : msg
    ));
  }, 800); // Show thinking dots for 800ms
}
```

### Step 3: Render with conditional logic

```tsx
{messages.map(message => {
  if (message.speaker === 'assistant') {
    return (
      <div key={message.id} className="flex flex-col gap-1">
        {/* Avatar (only show once, not during thinking) */}
        <div className="flex items-center gap-2">
          <Avatar name="Dot" />
          <span className="text-xs text-gray-600">Dot</span>
        </div>
        
        {/* Message content */}
        <div className="py-2">
          {message.isThinking ? (
            // Show thinking dots
            <ThinkingIndicator width={24} height={24} />
          ) : (
            // Show typing text
            <TypingText
              text={message.text}
              speed={30}
              cursor={false}
              className="text-gray-900 whitespace-pre-wrap"
            />
          )}
        </div>
      </div>
    );
  }
  
  // User messages appear instantly (no animation)
  return (
    <div key={message.id} className="flex justify-end">
      <div className="bg-blue-50 rounded-lg px-4 py-2">
        {message.text}
      </div>
    </div>
  );
})}
```

---

## Timing Configuration

### For SHORT messages (under 20 characters):

```tsx
const THINKING_DURATION_SHORT = 500; // 0.5 seconds of thinking dots
const SHOW_INSTANTLY = true; // Don't type out, just show

setTimeout(() => {
  setMessages(prev => prev.map(msg => 
    msg.id === messageId
      ? { ...msg, text: responseText, isThinking: false, instant: true }
      : msg
  ));
}, THINKING_DURATION_SHORT);

// In render:
{message.instant ? (
  <p>{message.text}</p>
) : (
  <TypingText text={message.text} speed={30} cursor={false} />
)}
```

### For LONG messages (20+ characters):

```tsx
const THINKING_DURATION_LONG = 800; // 0.8 seconds of thinking dots
const TYPING_SPEED = 30; // 30ms per character

setTimeout(() => {
  setMessages(prev => prev.map(msg => 
    msg.id === messageId
      ? { ...msg, text: responseText, isThinking: false }
      : msg
  ));
}, THINKING_DURATION_LONG);

// TypingText will automatically start typing when isThinking becomes false
```

---

## Complete Example: Full Chat Implementation

```tsx
import { useState } from 'react';
import { ThinkingIndicator } from '@/app/components/animations/ThinkingIndicator';
import { TypingText } from '@/app/components/animations/TypingText';

interface ChatMessage {
  id: string;
  speaker: 'user' | 'assistant';
  text: string;
  isThinking?: boolean;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleUserSend = (userMessage: string) => {
    // Add user message (appears instantly)
    const userMsgId = `user-${Date.now()}`;
    setMessages(prev => [...prev, {
      id: userMsgId,
      speaker: 'user',
      text: userMessage
    }]);

    // Simulate AI response
    const aiMsgId = `ai-${Date.now()}`;
    
    // Step 1: Show thinking dots
    setMessages(prev => [...prev, {
      id: aiMsgId,
      speaker: 'assistant',
      text: '',
      isThinking: true
    }]);

    // Step 2: After 800ms, start typing response
    setTimeout(() => {
      const responseText = generateAIResponse(userMessage);
      
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId
          ? { ...msg, text: responseText, isThinking: false }
          : msg
      ));
    }, 800);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => {
          if (message.speaker === 'user') {
            return (
              <div key={message.id} className="flex justify-end">
                <div className="bg-blue-50 rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-gray-900">{message.text}</p>
                </div>
              </div>
            );
          }

          return (
            <div key={message.id} className="flex flex-col gap-1">
              {/* AI Avatar */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full" />
                <span className="text-xs text-gray-600">Dot</span>
              </div>

              {/* AI Message */}
              <div className="py-2 max-w-[343px]">
                {message.isThinking ? (
                  <ThinkingIndicator width={24} height={24} />
                ) : (
                  <TypingText
                    text={message.text}
                    speed={30}
                    cursor={false}
                    className="text-gray-900 leading-relaxed"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && inputValue.trim()) {
                handleUserSend(inputValue);
                setInputValue('');
              }
            }}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-full"
          />
          <button
            onClick={() => {
              if (inputValue.trim()) {
                handleUserSend(inputValue);
                setInputValue('');
              }
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function generateAIResponse(userMessage: string): string {
  // Replace with actual AI API call
  return "I understand. Let me help you with that. Based on what you've shared, I recommend scheduling an appointment with your primary care physician.";
}
```

---

## Key Implementation Rules

### DO:
✅ Show ThinkingIndicator in the exact same position where text will appear  
✅ Use 800ms thinking duration for long messages (20+ chars)  
✅ Use 500ms thinking duration for short messages (<20 chars)  
✅ Set `cursor={false}` for AI responses (no cursor)  
✅ Set `speed={30}` for natural typing speed  
✅ Use `whitespace-pre-wrap` to preserve line breaks  
✅ Make user messages appear instantly (no animation)  

### DON'T:
❌ Show thinking dots in a different location than the text  
❌ Use cursor for AI responses (only for input fields)  
❌ Make text typing too slow (over 50ms per character)  
❌ Forget to handle the state transition from thinking → typing  
❌ Apply typing animation to user's own messages  
❌ Show thinking dots for less than 500ms (feels glitchy)  

---

## Troubleshooting

### "Thinking dots appear but text never shows"
**Issue:** State not updating from `isThinking: true` to `isThinking: false`  
**Fix:** Check your setTimeout is actually updating the message state

### "Text appears instantly, no typing animation"
**Issue:** TypingText not receiving the text prop, or `instant` flag is set  
**Fix:** Verify `text` prop is passed and contains the full message

### "Animation is too slow/fast"
**Issue:** Wrong `speed` prop value  
**Fix:** Adjust `speed` prop (30 = good default, 25 = faster, 50 = slower)

### "Cursor shows on AI messages"
**Issue:** `cursor` prop is true or not set  
**Fix:** Explicitly set `cursor={false}` for AI messages

### "Thinking dots appear twice or animation stutters"
**Issue:** Message re-rendering or duplicate state updates  
**Fix:** Use unique `key` prop on messages, ensure state updates happen once

---

## Testing Checklist

After implementation, verify:

- [ ] Thinking dots appear for 0.5-0.8 seconds before AI responds
- [ ] Text types out character by character at natural speed
- [ ] Dots and text appear in same location (smooth transition)
- [ ] User messages appear instantly (no animation)
- [ ] No cursor shows at end of AI messages
- [ ] Short messages (<20 chars) show thinking for 0.5s then appear instantly
- [ ] Long messages (20+ chars) show thinking for 0.8s then type out
- [ ] Line breaks and formatting preserved with `whitespace-pre-wrap`
- [ ] No console errors
- [ ] Animations feel smooth and natural

---

## Dependencies

Make sure these are installed:
```bash
pnpm add lottie-react
```

And these files exist in your project:
- `/src/app/components/animations/ThinkingIndicator.tsx`
- `/src/app/components/animations/TypingText.tsx`
- `/src/app/components/animations/thinking.json` (Lottie animation data)
```

---

## Summary

**ThinkingIndicator** = Three bouncing dots (0.5-0.8 seconds)  
**TypingText** = Character-by-character reveal (30ms per character)  
**Flow** = User sends message → Dots appear → Text types out → Complete

Both components work together to create a natural, conversational AI chat experience that feels responsive and human-like.
