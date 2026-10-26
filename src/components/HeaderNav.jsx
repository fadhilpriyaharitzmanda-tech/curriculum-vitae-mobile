import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function HeaderNav({
  stories,
  currentIndex,
  onSelectStory,
  isAudioPlaying,
  onToggleAudio
}) {
  return (
    <header className="story-header" aria-label="Main Navigation">
      {/* Left: Play Icon + Active/Story badge like in Photo 1 */}
      <div
        className="header-left"
        onClick={(e) => {
          e.stopPropagation();
          onToggleAudio();
        }}
        title={isAudioPlaying ? "Pause ambient sound" : "Play aesthetic ambient vibe"}
      >
        <button className="play-badge" type="button">
          {isAudioPlaying ? (
            <Pause className="play-icon" size={10} />
          ) : (
            <Play className="play-icon" size={10} />
          )}
          <span>{stories[currentIndex]?.tabLabel || 'daily'}</span>

          {/* Sound waves indicator */}
          <div className="sound-bars" aria-hidden="true">
            <span className={`sound-bar ${isAudioPlaying ? 'animating' : ''}`} />
            <span className={`sound-bar ${isAudioPlaying ? 'animating' : ''}`} />
            <span className={`sound-bar ${isAudioPlaying ? 'animating' : ''}`} />
          </div>
        </button>
      </div>

      {/* Right: Header category tabs (instagram, story, typography / cv, works, contact) */}
      <nav className="header-tabs">
        {stories.map((story, idx) => {
          // Keep tabs minimal like Photo 1: first few tabs
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={story.id}
              type="button"
              className={`header-tab-item ${isCurrent ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectStory(idx);
              }}
            >
              {story.tabLabel}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
