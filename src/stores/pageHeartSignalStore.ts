//src/stores/pageHeartSignalStore.ts 
import { writable } from 'svelte/store';

export const showModal = writable<boolean>(false);
export const isRecording = writable<boolean>(false);
export const showAnalyzeButton = writable<boolean>(false);
export const isRerecording = writable<boolean>(false);
export const statusText = writable<string>('녹음 준비가 완료되었습니다.');
export const timerDisplay = writable<string>('00:00');
export const audioUrl = writable<string | null>(null);
export const imageUrl = writable<string | null>(null);
export const startTime = writable<number>(0);
export const mediaRecorder = writable<MediaRecorder | null>(null);
export const audioChunks = writable<Blob[]>([]);
export const timerInterval = writable<number | null>(null);

export interface ButtonProps {
  classes: string;
  text: string;
  disabled: boolean;
}

export const recordButtonProps = writable<ButtonProps>({
  classes: 'bg-blue-500 hover:bg-blue-700',
  text: '녹음 시작',
  disabled: false,
});

export const analyzeButtonProps = writable<ButtonProps>({
  classes: 'hidden',
  text: '심장음 분석하기',
  disabled: false,
});