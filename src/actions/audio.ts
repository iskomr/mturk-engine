import { EDIT_AUDIO_SOURCE, PLAY_AUDIO } from '../constants';
import { AudioSettings } from '../types';

export interface PlayAudio {
  type: PLAY_AUDIO;
  file: HTMLAudioElement;
}

export interface EditAudioSource {
  type: EDIT_AUDIO_SOURCE;
  field: keyof AudioSettings;
  value: string;
}

export const editAudioSrc = (
  field: keyof AudioSettings,
  value: string
): EditAudioSource => ({
  type: EDIT_AUDIO_SOURCE,
  field,
  value
});

export const playAudio = (file: HTMLAudioElement): PlayAudio => ({
  type: PLAY_AUDIO,
  file
});