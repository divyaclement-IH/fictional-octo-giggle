/**
 * Avatar Component
 *
 * Reusable avatar for Dot, Sarah, and providers.
 * Design: Adapted from Figma imports (ResponseDot, StartOfConversation)
 */

import svgPaths from '@/imports/ResponseDot/svg-ztt4jl4dlz';

export type AvatarType = 'dot' | 'sarah' | 'provider';
export type AvatarSize = 'xxsmall' | 'small' | 'medium' | 'large';

const sizeMap: Record<AvatarSize, number> = {
  xxsmall: 24,
  small: 32,
  medium: 48,
  large: 64,
};

export interface AvatarProps {
  type: AvatarType;
  size?: AvatarSize;
  name?: string;
  imageUrl?: string;
}

export function Avatar({ type, size = 'xxsmall', name, imageUrl }: AvatarProps) {
  const pixelSize = sizeMap[size];

  if (type === 'dot') {
    return (
      <div className="relative shrink-0" style={{ width: pixelSize, height: pixelSize }} data-name="Avatar/Dot">
        <div
          className="-translate-y-1/2 absolute left-0 overflow-clip right-0 top-[calc(50%+0.1px)]"
          style={{ aspectRatio: '1/1' }}
          data-name="Dot"
        >
          {/* Top left dot */}
          <div className="absolute inset-[31.25%_53.6%_31.25%_8.9%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p3488a200} fill="#0012E7" />
            </svg>
          </div>

          {/* Top right dot */}
          <div className="absolute inset-[31.25%_9.85%_31.25%_52.65%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p3488a200} fill="#0012E7" />
            </svg>
          </div>

          {/* Bottom right dot */}
          <div className="absolute bottom-0 left-[46.4%] right-[28.6%] top-3/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d={svgPaths.p969ae00} fill="#002380" />
            </svg>
          </div>

          {/* Top center dot */}
          <div className="absolute bottom-3/4 left-[27.65%] right-[47.35%] top-0" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d={svgPaths.p969ae00} fill="#578EE8" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Sarah or provider avatars - use image or placeholder
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden bg-gray-200"
      style={{ width: pixelSize, height: pixelSize }}
      data-name={`Avatar/${type}`}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={name || type} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
          {name ? name[0].toUpperCase() : type[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}
