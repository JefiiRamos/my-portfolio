import Image from "next/image";
import { getGitHubAvatarUrl } from "@/lib/github";

type ProfileAvatarProps = {
  avatarUrl?: string | null;
  alt: string;
  size?: number;
  className?: string;
  priority?: boolean;
  fallbackInitials?: string;
};

export function ProfileAvatar({
  avatarUrl,
  alt,
  size = 112,
  className = "",
  priority = false,
  fallbackInitials = "JR",
}: ProfileAvatarProps) {
  const src = getGitHubAvatarUrl(avatarUrl, size);

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`profile-avatar ${className}`.trim()}
        priority={priority}
      />
    );
  }

  return (
    <div
      className={`profile-avatar profile-avatar--fallback ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden={!alt}
    >
      {fallbackInitials}
    </div>
  );
}
