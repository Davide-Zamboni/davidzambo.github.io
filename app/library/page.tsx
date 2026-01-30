import BookCard from '@/components/BookCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Library | Davide Zamboni',
  description: 'Books I recommend - from technical reads to productivity and personal development.',
};

const categories = [
  {
    name: 'Technical',
    books: [
      {
        title: 'Designing Data-Intensive Applications',
        description: 'Excellent book about many distributed systems concepts, databases, and big data processing ideas.',
        url: 'https://dataintensive.net/',
      },
      {
        title: 'Clean Code',
        description: 'A handbook of agile software craftsmanship. Essential principles for writing readable, maintainable code.',
        url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
      },
      {
        title: 'The Algorithm Design Manual',
        description: 'Practical guide to algorithm design with real-world problems and solutions. Great reference for technical interviews.',
        url: 'https://www.algorist.com/',
      },
      {
        title: 'Design Patterns',
        description: 'The classic "Gang of Four" book on reusable object-oriented software design patterns.',
        url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
      },
    ],
  },
  {
    name: 'Productivity & Career',
    books: [
      {
        title: 'Deep Work',
        description: 'On the importance of uninterrupted deep work and some pieces of advice on how to achieve that.',
        url: 'https://calnewport.com/writing/',
      },
      {
        title: 'So Good They Can\'t Ignore You',
        description: 'On how the passion hypothesis is flawed. Building career capital matters more than following your passion.',
        url: 'https://calnewport.com/writing/',
      },
      {
        title: 'Atomic Habits',
        description: 'A practical framework for building good habits and breaking bad ones through tiny changes.',
        url: 'https://jamesclear.com/atomic-habits/',
      },
      {
        title: 'Who Moved My Cheese?',
        description: 'A simple parable about dealing with change in work and life. Quick read with lasting lessons.',
        url: 'https://www.amazon.com/Who-Moved-My-Cheese-Amazing/dp/0399144463',
      },
    ],
  },
  {
    name: 'Life Design & Psychology',
    books: [
      {
        title: 'Designing Your Life',
        description: 'Applying design thinking to build a meaningful and fulfilling life. Practical exercises included.',
        url: 'https://designingyour.life/',
      },
      {
        title: 'Algorithms to Live By',
        description: 'Explores how computer science algorithms can be applied to everyday life decisions.',
        url: 'https://algorithmstoliveby.com/',
      },
      {
        title: 'Flow: The Psychology of Optimal Experience',
        description: 'The classic book on achieving the state of flow and finding happiness through engagement.',
        url: 'https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202',
      },
      {
        title: 'The Elephant in the Brain',
        description: 'On hidden motives in everyday life. Explores the unconscious reasons behind our behavior.',
        url: 'https://www.elephantinthebrain.com/',
      },
      {
        title: 'Tools of Titans',
        description: 'Tactics, routines, and habits from world-class performers across various fields.',
        url: 'https://tim.blog/tools-of-titans/',
      },
      {
        title: 'Numbers Don\'t Lie',
        description: '71 things you need to know about the world. Vaclav Smil uses data to explain energy, environment, and modern life.',
        url: 'https://www.amazon.com/Numbers-Dont-Lie-Things-World/dp/0143136224',
      },
    ],
  },
];

export default function Library() {
  return (
    <section className={`${styles.library} stagger`}>
      <h1>Library</h1>
      <p className={styles.subtitle}>
        Books I&apos;ve read and recommend.
      </p>
      
      <div>
        {categories.map((category) => (
          <div key={category.name} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.grid}>
              {category.books.map((book) => (
                <BookCard
                  key={book.title}
                  title={book.title}
                  description={book.description}
                  url={book.url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
