/// <reference types="vite/client" />

// Declare module types for image imports
declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.gif' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.csv' {
  const value: string
  export default value
}

// Declare the figma:asset virtual module scheme
declare module 'figma:asset/*' {
  const value: string
  export default value
}

// Declare the figma:foundry-client-api module
declare module 'figma:foundry-client-api'
