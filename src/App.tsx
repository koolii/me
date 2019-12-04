import React from 'react';
// import { FaTwitter, FaFacebook, FaGithub, FaMedium } from 'react-icons/fa';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Portfolio</h1>
        <span>Living in Tokyo, Japan. Making a living from engineering.</span>
        <ul className="navigationb">
          <a href="https://github.com/koolii">
            <li>Github</li>
          </a>
          <a href="https://www.facebook.com/takahito.kuriyama.09">
            <li>Facebook</li>
          </a>
          <a href="https://medium.com/@koolii">
            <li>Blog</li>
          </a>
          <a href="https://twitter.com/_koolii">
            <li>Twitter</li>
          </a>
        </ul>
      </header>

      <section className="sec_introduction">
        <p className="profile" />
        <div>
          <h2>About me</h2>
          <div className="sec_introduction_div">
            <span>Name: Takahito Kuriyama</span>
            <span>Nationality: Japan</span>
            <span>Gender: Man</span>
            <span>Birthday: 09/09/1992(27age)</span>
            <span>Education: University of Aizu (会津大学)</span>
          </div>
        </div>
      </section>

      <section className="sec_history">
        <h2>Experiences</h2>
        <ul>
          <li>2011: 会津大学に入学、プログラマーのアルバイトを始める</li>
          <li>2015: 同大学を卒業し、アルバイト先に入社</li>
          <li>2016-2017: エアークロゼットに中途入社</li>
          <li>2017-19: オランダへ移住し、WEB・インフラエンジニアとして従事</li>
          <li>2020: (仮)日本に帰国しフリーランスエンジニアとして活動を開始</li>
        </ul>
      </section>

      <section className="sec_skill">
        <h2>Skills</h2>
        <div className="sec_skill_div">
          <div className="eee">
            <h3>Javascript</h3>
            <div>
              <span>
                使用歴2.5年程、主にNode.jsを使ったAPIの開発や、バッチ処理等での経験が多い。
                大規模配信システムでは、WebSocketを使ったイベント起点のAPI作成やフロントの開発。
                AngularJS等のSPAに関しても仕事内外での経験。
                個人的なプロジェクトでjQUeryやTypeScriptでスクリプト等を作成。
                大学の研究では、WebRTCの技術を使ったWEBアプリケーションを作成。
                (Express,koa,React,Angular,TypeScript,Puppeteer)
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>Python(&gt; version 3)</h3>
            <div>
              <span>
                使用歴0.5年程。主に形態素解析を行うために使用。
                ユーザからの感想を形態素解析にかけ、処理の結果をアップロード等行う処理を作成。
                機械学習やAI等での使用経験はありません。 (Mecab)
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>Java</h3>
            <div>
              <span>
                使用歴3年程、大学生時代にアルバイトでプログラマーをしていた頃に一番よく使用した。
                他には自動車運転手用の配車用Androidアプリ(ver
                Kitkat)を位置情報などを使って作成した。 (Android
                Java,Struts,Spring)
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>C#</h3>
            <div>
              <span>
                使用歴1年、同じくプログラマーのアルバイト時期に、
                受託開発で使用した。主に登録項目が多く帳票の作成にかなり苦労した経験。
                この時画面の作成にjQueryを同時に学ぶ (Entity Framework)
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>Ruby</h3>
            <div>
              <span>
                使用期間3ヶ月程、学生の頃にRubyを少し勉強して、RoRで日記アプリを作成
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>PHP</h3>
            <div>
              <span>
                使用期間は0.5年程、主に大規模配信システムのAPIで使用。
                その他、簡単なスクリプト系もPHPで作成することも時々ありました。
              </span>
            </div>
          </div>
          <div className="eee">
            <h3>インフラ</h3>
            <div>
              <span>
                使用期間は1年程、主に大規模配信システムのインフラを完全オンプレミスで経験。
                主にAnsibleの導入やプログラマとしては各種自動化等をTypescriptを使って行いました。
              </span>
            </div>
          </div>
        </div>

        <a href="./projects" className="button">
          <div className="eee">
            <span>
              (工事中)さらに詳しいプロジェクト詳細について &gt;&gt; more
            </span>
          </div>
        </a>
      </section>

      {/* <section className="sec_project">
        <h2>Projects</h2>
        <h2>Part-time job (2011-2015)</h2>
        <div>
          <div>
            <span>治験システムの保守運営</span>
            <span>Java/Struts2/Javascript(Pure)</span>
            <span>2 years</span>
          </div>
          <div>
            <span>医療器具管理システムの新規開発</span>
            <span>C#,Javascript(jQuery)</span>
            <span>1 year</span>
          </div>
          <div>
            <span>電動自動車、運転手用スマホアプリ新規開発</span>
            <span>Java(Android 4.4系)</span>
            <span>0.5 year</span>
          </div>
        </div> */}

      {/* <h2>SIer 株式会社メイガス (04/2015-12/2015)</h2>
        <div>
          <div>
            <span>某サイトの保守運営</span>
            <span>営業,PHP,Apache</span>
            <span>
              定期的にミーティングを行い、新規コンテンツへのアップデートや一部PHPによる
              動的な処理を追加
            </span>
          </div>
          <div>
            <span>某大手学習塾の管理システム・偏差値計算処理</span>
            <span>設計・営業, Java</span>
            <span>主な業務は仕様策定や設計、プログラマー達の進捗管理等</span>
          </div>
        </div>

        <h2>エアークローゼット (01/2016-08/2017)</h2>
        <div>
          主にバックエンド側を担当だったが、必要に応じて他の箇所にも対応
          Javascriptを主に扱っており、モダンな技術を様々使ってシステムを構築をさせていただいた(eslint,babel,koa,mocha等)
          npmパッケージについても業務で作成することもあった。
          https://github.com/air-closet/node-np
          Javascript(Node.js/AngularJS),Python(3系,Mecab),Ruby on
          Rails,Ansible,AWS
        </div>

        <h2>CreateEntrance (10/2017-02/2020)</h2>
        <div>
          <span>大規模ストリーミングシステムの開発、インフラ(オンプレ)</span>
          <span>JavaScript(Node.js/websocket),PHP,Ubuntu</span>
          <span>
            一年以上に渡ってフルリモートによる業務を行った。進捗管理はビデオチャットによる週一回のミーティングにて
            Ansibleで手動コマンド実行でのサーバ構築を短縮させたり、Kubernetes環境を構築等
          </span>
        </div>

        <h2>Side jobs</h2>
        <div>
          <div>
            <span>ニコニコ動画のカラオケ化WEBアプリ(2014)</span>
            <span>HTML,Javascript(jQuery),CSS</span>
            <span>
              個人アプリとして作成し、コンテストに入賞
              Javascriptで録音周り等を行っていたので、どうしても遅延等により曲と声の音声ファイルを一致させることができなかった
              WebWorkerを検証する良いきっかけになった
            </span>
          </div>
          <div>
            <span>ECサイト管理側システム新規作成(2019)</span>
            <span>PHP(7系),Magent(2.3系)</span>
          </div>
        </div>
      </section> */}

      <footer>
        <h2>Contact</h2>
        <div>主にメール・Twitter・Facebookですと気づきやすいです。</div>
        <div>
          <b>koolii0909アットgmail.com</b>
        </div>
        <ul className="navigationb">
          <a href="https://github.com/koolii">
            <li>Github</li>
          </a>
          <a href="https://www.facebook.com/takahito.kuriyama.09">
            <li>Facebook</li>
          </a>
          <a href="https://medium.com/@koolii">
            <li>Blog</li>
          </a>
          <a href="https://twitter.com/_koolii">
            <li>Twitter</li>
          </a>
        </ul>
        <div className="copyright">
          © 2019 - Copyright Takahito Kuriyama, All Rights Reserved.
        </div>
        {/* <ul className="navigation">
          <li>
            <a href="https://github.com/koolii">
              <FaGithub size={50} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/takahito.kuriyama.09">
              <FaFacebook size={50} />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@koolii">
              <FaMedium size={50} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_koolii">
              <FaTwitter size={50} />
            </a>
          </li>
        </ul> */}
      </footer>
    </div>
  );
};

export default App;
