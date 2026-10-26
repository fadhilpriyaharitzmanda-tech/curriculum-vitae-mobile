import React from 'react';

export default function StoryProgress({
  totalStories,
  currentIndex,
  progress,
  onSelectStory
}) {
  return (
    <div className="story-progress-container" aria-label="Story progress indicators">
      {Array.from({ length: totalStories }).map((_, idx) => {
        let fillWidth = '0%';
        if (idx < currentIndex) {
          fillWidth = '100%';
        } else if (idx === currentIndex) {
          fillWidth = `${progress}%`;
        }

        return (
          <div
            key={idx}
            className="story-progress-segment"
            onClick={(e) => {
              e.stopPropagation();
              onSelectStory(idx);
            }}
            title={`Slide ${idx + 1}`}
          >
            <div
              className="story-progress-fill"
              style={{ width: fillWidth }}
            />
          </div>
        );
      })}
    </div>
  );
}
