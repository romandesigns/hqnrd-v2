import HeroVideoDialog from "../magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="/assets/video/video.mp4"
        thumbnailSrc="/assets/video/poster.gif"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/assets/video/video.mp4"
        thumbnailSrc="/assets/video/poster.gif"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
