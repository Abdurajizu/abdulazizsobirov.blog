---
sort_date: 2026-02-01
venue: "Accepted at the ICML 2026 FoGen Workshop and CoRR"
title: Setting-matched and semantics-scaled benchmarking of one-step generative models against multistep diffusion and flow models
semester: Spring 2026
lab: "Wang AI and Robotics Lab"
lab_url: "https://wang.hms.harvard.edu/"
lab_pi: "Mengyu Wang"
lab_mentors: "Mentor: Advaith Ravishankar, graduate student"
lab_part: "HMS"
summary: Benchmarks eight models on ImageNet, ImageNetV2 and reLAIONet, a new proofread out-of-distribution dataset. FID-focused development and CFG selection can mislead in few-step regimes.
tags: [generative models, diffusion, benchmarking]
links:
  - label: Paper (OpenReview)
    url: https://openreview.net/forum?id=XWklPHtBGe&referrer=%5Bthe%20profile%20of%20Abdulaziz%20Sobirov%5D(%2Fprofile%3Fid%3D~Abdulaziz_Sobirov1)
---

Co-authored with the Wang Lab. Fair comparison of one-step generators with multi-step systems is hard because studies use mismatched sampling steps and classifier-free guidance (CFG) settings.

- Benchmarks eight models: one-step flows (MeanFlow, Improved MeanFlow, SoFlow), multi-step baselines (RAE, Scale-RAE) and established systems (SiT, Stable Diffusion 3.5, FLUX.1), under a class-conditional protocol.
- Introduces reLAIONet, a proofread out-of-distribution dataset aligned to ImageNet label IDs.
- Guidance changes can improve FID while degrading text-image alignment and human preference, so the paper adds CLIP-scaled and PickScore-scaled variants of FID and Inception Score (csFID, psFID, csIS, psIS) as diagnostics.
