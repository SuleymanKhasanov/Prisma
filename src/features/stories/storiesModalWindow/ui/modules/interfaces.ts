interface Story {
  movieKey: string;
}

interface StoriesState {
  currentStory: Story | null;
}

export interface RootState {
  stories: StoriesState;
}
