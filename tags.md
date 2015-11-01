---
title: Tags
layout: default
permalink: tags/
---


<div id='tag_cloud'>
{% assign tags = site.tags | sort %}
{% for tag in tags %}
 <span class="site-tag">
	<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}" style="font-size: {{ tag | last | size  |  times: 4 | plus: 80  }}%">{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})</a>
</span>
{% endfor %}
</div>

<ul class="listing">
{% for tag in site.tags %}
  <li class="listing-seperator" id="{{ tag[0] }}">{{ tag[0] }}</li>
{% for post in tag[1] %}
  <li class="listing-item">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y %b %d" }}</time>
  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
{% endfor %}
</ul>

<script src="/assets/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/assets/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
      color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>