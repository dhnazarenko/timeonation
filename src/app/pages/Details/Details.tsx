import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import VideoIcon from '../../components/Icons/VideoIcon';
import InformationCard from '../../components/InformationCard/InformationCard';
import styles from './Details.module.css';

function Details(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <img
          src="./weidensee.jpg"
          alt="Project Image"
          className={styles.image}
        />
      </header>

      <main className={styles.main}>
        <h1 className={styles.headline}>
          Tiere auf Lebenshof Gut Weidensee benötigen Dringend Hilfe!
        </h1>
        <InformationCard
          financedPercent={50}
          videoViews={240}
          openAmount={66.051}
          buttonIcon={<VideoIcon />}
          buttonText="Video ansehen"
          buttonVariant="primary"
        />
        <p className={styles.text}>
          Der Lebenshof Gut Weidensee in Thüringen Wir verstehen uns als sichere
          Heimat für Tiere in Not und als Ort der Begegnung zwischen Menschen
          und anderen Lebewesen. Unser Lebenshof soll dazu beitragen, dass wir
          Menschen Tiere als das begreifen was sie sind: Einzigartige
          Persönlichkeiten, die ihr Leben lieben und genauso Schmerz, Freude und
          Angst empfinden wie wir Menschen. Im Jahr 2005 erwarb Jost Weber Gut
          Weidensee. Nach einigen Jahren und viel Arbeit, stand im Jahr 2012 die
          Entscheidung fest, in der unmittelbaren Nähe zum geografischen
          Mittelpunktes Deutschlands, einen Ort des Zusammenlebens und der
          Begegnungen zwischen Mensch und Tier zu schaffen. So wurde aus dem
          ehemaligen Rittergut ein Lebenshof, auf dem vor allem sogenannte
          „Nutztiere“ - welche besonders von der Ausbeutung durch Menschen
          betroffen sind – ein sicheres Zuhause finden. Mittlerweile kümmern wir
          uns um rund 100 gerettete Seelen (Schweine, Rinder, Schafe, Enten,
          Gänse, Pferde, Hunde und Katzen) und arbeiten täglich daran einen
          Ausgleich für all die Verletzungen zu schaffen, die diese Tiere in der
          Vergangenheit erlitten haben. Wir sprechen bei Gut Weidensee bewusst
          von einem Lebenshof, nicht von einem Gnadenhof. Wir sehen es nicht als
          Gnade, Tiere bei uns aufzunehmen und ihnen ein gutes Leben zu
          ermöglichen. Es ist das einzig Richtige. Wir sehen darin
          Gerechtigkeit. Ein Tier auszunutzen, es zu verletzen, zu töten, zu
          vernachlässigen oder wegzugeben, weil es alt oder krank ist, ist
          falsch und ungerecht. Zudem sind wir einer der wenigen Lebenshöfe, der
          sogar gerettete Füchse aus europäischen Pelzfarmen, beherbergt und
          betreut. Alle bei uns lebenden Tiere haben Zeit ihres Lebens einen
          sicheren Platz zur Verfügung, werden nicht genutzt oder anderweitig in
          den Dienst des Menschen gestellt. Denn wir vertreten den Gedanken,
          dass jedes Lebewesen ein Recht auf Leben und Unversehrtheit verdient
          hat. Neben der Versorgung der uns anvertrauten Tiere und den
          anfallenden Arbeiten rund um unseren Hof, sind uns
          Öffentlichkeitsarbeit und der Aufbau von Bildungsangeboten für Kinder
          & Erwachsene ein sehr wichtiges Anliegen. Weitere Informationen über
          unseren Lebenshof und unsere Tiere finden Sie unter:
          www.gut-weidensee.org
        </p>
      </main>
    </div>
  );
}

export default Details;
