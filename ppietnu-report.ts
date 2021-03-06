<TeXmacs|1.99.1>

<style|<tuple|source|chinese>>

<\body>
  <\active*>
    <\src-title>
      <src-package|ppietnu-report|1.1>

      <\src-purpose>
        Standard styles for report of PPIETNU (Planning Project of Innovation
        and Entrepreneurship Training of National Undergraduate) in China.
      </src-purpose>

      <\src-copyright|2014-2020>
        Zhengyu Luo
      </src-copyright>

      <\src-license>
        GPL 3
      </src-license>
    </src-title>
  </active*>

  <use-package|std|env|section-base|>

  <\active*>
    <\src-comment>
      Language
    </src-comment>
  </active*>

  <assign|en|<macro|text|<with|font|roman|<arg|text>>>>

  <\active*>
    <\src-comment>
      Table of Contents
    </src-comment>
  </active*>

  <assign|table-of-contents-text|\<#76EE\><space|2fs>\<#5F55\>>

  <assign|chapter-toc|<macro|name|<toc-main-2|\<#7B2C\><space|0.2fs><the-chapter><space|0.2fs>\<#7AE0\><chapter-sep><arg|name>>>>

  <assign|section-toc|<macro|name|<toc-normal-1|<toc-title|section|<arg|name>>>>>

  <assign|toc-dots|<macro|<datoms|<macro|x|<repeat|<arg|x>|<math|\<cdots\>>>>|<htab|5mm>>>>

  <assign|toc-strong-2|<macro|left|right|<with|font|simhei|font-size|1.4fs|<arg|left><toc-dots>><no-break><arg|right>>>

  <assign|toc-1|<macro|left|right|<with|font-size|1.2fs|<space|2fs><arg|left><toc-dots>><no-break><arg|right>>>

  <assign|toc-2|<macro|left|right|<with|font-size|1.2fs|<space|4fs><arg|left><toc-dots>><no-break><arg|right>>>

  <assign|toc-3|<macro|left|right|<with|font-size|1.2fs|<space|6fs><arg|left><toc-dots>><no-break><arg|right>>>

  <\active*>
    <\src-comment>
      Page Styles \| Margin, Header, Footer
    </src-comment>
  </active*>

  <assign|page-foot-sep|5mm>

  <assign|page-top|2.5cm>

  <assign|page-bot|2.8cm>

  <assign|header-primary|<macro|>>

  <assign|header-secondary|<macro|>>

  <assign|front-begin|<macro|<style-with|src-compact|none|<set-page-number|1><assign|page-number|<macro|<quote|<number|<page-the-page>|Roman>>>><assign|page-odd-footer|<style-with|src-compact|none|<htab|5mm><with|font|roman|font-size|0.9fs|<page-number>><htab|5mm>>><assign|page-even-footer|<style-with|src-compact|none|<htab|5mm><with|font|roman|font-size|0.9fs|<page-number>><htab|5mm>>>>>>

  <assign|main-begin|<macro|<style-with|src-compact|none|<set-page-number|1><assign|page-number|<macro|<quote|<page-the-page>>>><assign|page-odd-footer|<style-with|src-compact|none|<htab|5mm><with|font|roman|font-size|0.9fs|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>><assign|page-even-footer|<style-with|src-compact|none|<htab|5mm><with|font|roman|font-size|0.9fs|-<space|0.2fs><page-number><space|0.2fs>-><space|3fn><htab|5mm>>>>>>

  <\active*>
    <\src-comment>
      Content Styles \| Section
    </src-comment>
  </active*>

  <assign|sectional-short-style|<macro|false>>

  <assign|sectional-centered|<macro|name|<wide-centered|<arg|name><no-page-break>>>>

  <assign|sectional-normal|<macro|name|<wide-normal|<arg|name><no-page-break>>>>

  <assign|sectional-sep|<space|1fs>>

  <assign|chapter-title|<macro|name|<style-with|src-compact|none|<new-page*><style-with|src-compact|none|<sectional-centered|<vspace*|0.8fs><with|font|simhei|font-size|1.8fs|<arg|name>><vspace|0.5fs>>>>>>

  <assign|chapter-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-title|\<#7B2C\><space|0.2fs><the-chapter><space|0.2fs>\<#7AE0\><chapter-sep><arg|title>>>>>

  <assign|section-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<vspace*|0.5fs><with|font|simhei|font-size|1.4fs|<arg|name>><vspace|0.5fs>>>>>

  <assign|section-numbered-title|<macro|title|<style-with|src-compact|none|<section-title|<with|font|roman|<the-section>><section-sep><arg|title>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<vspace*|0.5fs><with|font|simhei|font-size|1.2fs|<arg|name>><vspace|0.5fs>>>>>

  <assign|subsection-numbered-title|<macro|title|<style-with|src-compact|none|<subsection-title|<with|font|roman|<the-subsection>><subsection-sep><arg|title>>>>>

  <assign|subsubsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<vspace*|0.5fs><with|font|simhei|font-size|1.2fs|<arg|name>><vspace|0.5fs>>>>>

  <assign|subsubsection-numbered-title|<macro|title|<style-with|src-compact|none|<subsubsection-title|<with|font|roman|<the-subsubsection>><subsubsection-sep><arg|title>>>>>

  <assign|chapter-clean|<macro|<reset-section><reset-equation><reset-figure><reset-table>>>

  <assign|appendix-numbered-title|<macro|title|<chapter-title|<appendix-text><the-appendix>>>>

  <assign|appendix-clean|<macro|<chapter-clean><assign|chapter-prefix|<the-appendix>><assign|appendix-prefix|<the-appendix>>>>

  <\active*>
    <\src-comment>
      Content Styles \| Paragraph
    </src-comment>
  </active*>

  <assign|par-first|2fs>

  <assign|par-sep|0.9fs>

  <assign|par-par-sep|0>

  <\active*>
    <\src-comment>
      Content Styles \| Text
    </src-comment>
  </active*>

  <assign|font-size|1.2fs>

  <\active*>
    <\src-comment>
      Content Styles \| List
    </src-comment>
  </active*>

  <assign|aligned-item|<macro|name|<style-with|src-compact|none|<with|par-first|<minus|<item-hsep>>|<yes-indent>><resize|<arg|name>|<minus|1r|<minus|<item-hsep>|0.5fn>>||<plus|1r|0.5fn>|>>>>

  <\active*>
    <\src-comment>
      Content Styles \| Math
    </src-comment>
  </active*>

  <assign|display-equation|<macro|nr|<chapter-prefix><arg|nr>>>

  <\active*>
    <\src-comment>
      Content Styles \| Enunciation
    </src-comment>
  </active*>

  <assign|render-theorem|<macro|which|body|<render-enunciation|<theorem-name|<arg|which><theorem-sep>>|<arg|body>>>>

  <\active*>
    <\src-comment>
      Content Styles \| Figure
    </src-comment>
  </active*>

  <assign|figure-sep|<space|1fs>>

  <assign|figure-name|<macro|name|<arg|name>>>

  <assign|display-figure|<macro|nr|<chapter-prefix><arg|nr>>>

  <assign|render-big-figure|<\macro|type|name|fig|cap>
    <padded-normal|1fn|1fn|<tabular*|<tformat|<twith|table-width|<value|figure-width>>|<cwith|3|3|1|1|cell-hyphen|t>|<cwith|1|-1|1|-1|cell-lsep|<value|figure-left-padding>>|<cwith|1|-1|1|-1|cell-rsep|<value|figure-right-padding>>|<cwith|2|2|1|1|cell-height|<value|figure-caption-sep>>|<cwith|3|3|1|1|cell-lsep|<value|caption-left-padding>>|<cwith|3|3|1|1|cell-rsep|<value|caption-right-padding>>|<table|<row|<cell|<arg|fig>>>|<row|<cell|>>|<row|<\cell>
      <\surround|<figure-name|<arg|name><figure-sep>><list-caption|<arg|type>|<arg|cap>>|>
        <arg|cap>
      </surround>
    </cell>>>>>>
  </macro>>

  <assign|display-table|<macro|nr|<chapter-prefix><arg|nr>>>

  <assign|table-text|\<#8868\>>

  <assign|big-table|<\macro|body|caption>
    <surround|<next-table>||<padded-normal|1fn|1fn|<tabular*|<tformat|<twith|table-width|<value|figure-width>>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|-1|1|-1|cell-lsep|<value|figure-left-padding>>|<cwith|1|-1|1|-1|cell-rsep|<value|figure-right-padding>>|<cwith|2|2|1|1|cell-height|<value|figure-caption-sep>>|<cwith|1|1|1|1|cell-lsep|<value|caption-left-padding>>|<cwith|1|1|1|1|cell-rsep|<value|caption-right-padding>>|<table|<row|<\cell>
      <\surround|<figure-name|<with|font|simhei|font-size|1.2fs|<table-text>
      <with|font|roman|<the-table>><figure-sep>>><list-caption|<arg|table>|<arg|caption>>|>
        <with|font|simhei|font-size|1.2fs|<arg|caption>>
      </surround>
    </cell>>|<row|<cell|>>|<row|<cell|<with|font-size|1fs|<arg|body>>>>>>>>>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>