import * as React from 'react'
import Layout from '../components/layout'

const Emergency = () => (
  <section>
    <h3>流山市避難所</h3>
    <h4>災害時</h4>
    <a
      href="https://drive.google.com/open?id=16cTn1YHJ3EIk8iTyzRw_mmSav1u_yZPz&usp=sharing/"
      target="_blank"
      rel="noopener"
    >
      #台風19号
    </a>
    <h4>ペット可能</h4>
    <a
      href="https://www.city.nagareyama.chiba.jp/_res/projects/default_project/_page_/001/003/605/oyamasaishin.pdf"
      target="_blank"
      rel="noopener"
    >
      小山小学校
    </a>
  </section>
)

const Pediatrics = () => (
  <section>
    <h3>小児科まとめ（WIP）</h3>
    <h4>夜間、休日・祝日</h4>
    <a
      href="http://www.nagareyama-med.com/practice/practice01.html"
      target="_blank"
      rel="noopener"
    >
      流山市 平日夜間・休日診療所 / 流山市医師会
    </a>
  </section>
)

export default () => (
  <Layout>
    <h2>便利情報</h2>
    <Emergency />
    <Pediatrics />
  </Layout>
)
