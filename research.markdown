---
layout: page
title: Research
permalink: /research/
wide: true
---

<!-- Entries live in _research/ — one file each. Set semester, lab, lab_url,
     lab_note and role in the front matter; the page groups them by semester,
     then by lab. Newest sort_date first, so keep each lab's entries adjacent. -->

{% assign entries = site.research | sort: "sort_date" | reverse %}
{% if entries.size > 0 %}
<div class="entry-list">
  {%- assign prev_semester = "" -%}
  {%- assign prev_lab = "" -%}
  {%- for entry in entries %}
    {%- if entry.semester != prev_semester %}
      {%- unless forloop.first %}</section></section>{% endunless %}
  <section class="term">
    <h2 class="term-title">{{ entry.semester }}</h2>
    {%- if entry.term_note %}<p class="term-note">{{ entry.term_note }}</p>{% endif %}
      {%- assign prev_semester = entry.semester -%}
      {%- assign prev_lab = "" -%}
    {%- elsif entry.lab != prev_lab %}
      </section>
    {%- endif %}
    {%- if entry.lab != prev_lab %}
    <section class="lab">
      <div class="lab-head">
        <h3 class="lab-title">{% if entry.lab_url != "" %}<a href="{{ entry.lab_url }}" rel="noopener noreferrer" target="_blank">{{ entry.lab }}</a>{% else %}{{ entry.lab }}{% endif %}</h3>
        {%- if entry.lab_part %}<span class="lab-part" aria-hidden="true">|</span><span class="lab-part-name">{{ entry.lab_part }}</span>{% endif %}
        <button type="button" class="lab-toggle" aria-expanded="false" aria-controls="lab-info-{{ forloop.index }}">
          <svg class="entry-chevron" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
            <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="lab-toggle-label">Lab info</span>
        </button>
      </div>
      <div class="entry-detail lab-info" id="lab-info-{{ forloop.index }}">
        <div class="entry-detail-inner">
          {%- if entry.lab_note %}<p class="lab-meta">{{ entry.lab_note }}</p>{% endif %}
          {%- if entry.lab_pi %}<p class="lab-meta">PI: {{ entry.lab_pi }}</p>{% endif %}
          {%- if entry.lab_mentors %}<p class="lab-meta">{{ entry.lab_mentors }}</p>{% endif %}
        </div>
      </div>
      {%- assign prev_lab = entry.lab -%}
    {%- endif %}
    {%- include research-entry.html entry=entry index=forloop.index -%}
    {%- if forloop.last %}</section></section>{% endif %}
  {%- endfor %}
</div>
{% else %}
<p>Nothing here yet.</p>
{% endif %}
