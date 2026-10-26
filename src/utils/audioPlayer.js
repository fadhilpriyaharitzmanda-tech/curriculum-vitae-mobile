// Ambient Web Audio synth generator for aesthetic chill / lo-fi background vibes
class AestheticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.gainNode = null;
    this.chordIndex = 0;

    // Dreamy lo-fi chords (Frequencies in Hz: Emaj7 -> G#m7 -> C#m7 -> Aadd9)
    this.chords = [
      [164.81, 207.65, 246.94, 329.63, 493.88], // E maj7
      [207.65, 246.94, 311.13, 415.30, 493.88], // G#m7
      [138.59, 164.81, 207.65, 277.18, 415.30], // C#m7
      [110.00, 164.81, 220.00, 277.18, 329.63], // Aadd9
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(0.12, this.ctx.currentTime);
        this.gainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChord(frequencies) {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const duration = 3.6;

    frequencies.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft warm low-pass filter
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.frequency.exponentialRampToValueAtTime(350, now + duration);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Smooth attack and gentle fade envelope
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.isPlaying = true;
    this.tick();
  }

  tick() {
    if (!this.isPlaying) return;
    const currentChord = this.chords[this.chordIndex];
    this.playChord(currentChord);
    this.chordIndex = (this.chordIndex + 1) % this.chords.length;

    this.timer = setTimeout(() => {
      this.tick();
    }, 3800);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export const aestheticAudio = new AestheticAudio();
