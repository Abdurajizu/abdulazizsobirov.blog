---
layout: page
title: Projects
permalink: /projects/
wide: true
---

<!-- Entries live in _projects/ — one file each. Set `kind: technical` or
     `kind: exposition`; newest sort_date first within each section. -->

{% assign all = site.projects | sort: "sort_date" | reverse %}
{% assign technical = all | where: "kind", "technical" %}
{% assign exposition = all | where: "kind", "exposition" %}

{% if technical.size > 0 %}
<h2 class="term-title">Technical projects</h2>
<div class="entry-list">
  {%- for entry in technical %}
    {%- include research-entry.html entry=entry index=forloop.index -%}
  {%- endfor %}
</div>
{% endif %}

{% if exposition.size > 0 %}
<h2 class="term-title project-section">Exposition papers</h2>
<div class="entry-list">
  {%- for entry in exposition %}
    {%- assign idx = forloop.index | plus: 100 -%}
    {%- include research-entry.html entry=entry index=idx -%}
  {%- endfor %}
</div>
{% endif %}
