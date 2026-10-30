---
sort_date: 2026-06-15
title: Redundancy reduction improves world-model sample efficiency in Atari
semester: Summer 2026
term_note: "During my summer as a KRANIUM fellow at the Kempner Institute."
lab: "Wang AI and Robotics Lab"
lab_url: "https://wang.hms.harvard.edu/"
lab_pi: "Mengyu Wang"
lab_mentors: "Mentor: Advaith Ravishankar, graduate student"
lab_part: "HMS"
summary: Technical report in progress. A 390-run benchmark on 26 Atari games. Replacing DreamerV3's pixel decoder with a Barlow-Twins redundancy-reduction objective (R2-Dreamer) gives roughly 25% better sample efficiency.
tags: [work in progress, world models, RL, PyTorch, Atari 100k]
links:
  - label: KRANIUM poster (PDF)
    url: /assets/research/kranium-poster.pdf
media:
  type: image
  src: /assets/research/kranium-poster.png
  alt: KRANIUM research poster on redundancy-reduction world models in Atari
  caption: KRANIUM poster, Kempner Institute and Harvard URAF. Technical report in progress.
---

Supported by the KRANIUM Program at the Kempner Institute and the Harvard College Office of Undergraduate Research and Fellowships.

- **Setup:** 26 games × 5 seeds × 3 models = 390 runs on the Atari 100k benchmark, one H100 per run, 100 evaluation episodes with a frozen policy.
- **Result:** R2-Dreamer reaches IQM human-normalized score 0.402 vs. 0.322 for DreamerV3, with non-overlapping CIs and 40% higher area under the learning curve. It matches DreamerV3's final score with 22.5% fewer frames.
- **Objective, not decoder:** DreamerPro is also decoder-free but scores 0.069, so the gain comes from the objective.
- **Limits:** the gain is mid-range, and DreamerV3 still wins 14 of 26 games. Which ingredient matters is untested.
- Implemented and trained three RSSM world-model variants in PyTorch under a shared backbone, and built the SLURM job pipeline and evaluation harness.

**Status:** the technical report is a work in progress, and I plan to keep investigating world models later.
