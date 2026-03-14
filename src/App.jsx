const skills = [
  "Разработка веб-приложений (full-stack): React, TypeScript, Python, FastAPI, PostgreSQL",
  "Интеграция моделей машинного обучения в продакшен",
  "Построение и обучение моделей: классификация, регрессия, рекомендации",
  "Предобработка и анализ данных, построение ETL-пайплайнов",
  "Разработка ML-сервисов от прототипа до деплоя",
  "Работа с Jupyter, MLflow, Docker",
  "Ответственный подход к работе и коммуникации",
];

const stack = ["Java", "Spring Boot", "RabbitMQ", "JavaScript", "TypeScript"];

const achievements = [
  "Прошел курс IT-LIFT и поступил на стажировку в 7bits",
  "Участвовал в хакатоне по работе с Big Data",
];

const education = [
  {
    period: "2021-2025",
    place: "Омский государственный университет (Россия, Омск)",
    details:
      "Факультет цифровых технологий и кибербезопасности, Прикладная информатика, бакалавриат",
  },
  {
    period: "2023-2024",
    place: "Разработка программного обеспечения (7bits, Омск, Россия)",
    details: "Практика и обучение в формате стажировки",
  },
  {
    period: "2019-2021",
    place: "Курсы Махаон",
    details: "Программирование и основы веб-разработки",
  },
];

function App() {
  const avatarUrl = `${import.meta.env.BASE_URL}avatar.jpg`;

  return (
    <main className="page">
      <article className="resume">
        <header className="me">
          <section className="me__content">
            <h1>Потапов Артем</h1>
            <p className="role">Full-stack разработчик</p>
            <div className="contacts">
              <p>temathebest@gmail.com</p>
              <p>Омск, Россия (UTC+6)</p>
              <p>Уровень английского языка: B2 (Pre-Intermediate)</p>
            </div>
          </section>
          <aside className="me__photo-wrap">
            <img
              src={avatarUrl}
              alt="Фото"
              className="me__photo"
            />
          </aside>
        </header>

        <section className="section">
          <h2>Обо мне</h2>
          <p>
            Я работаю full-stack разработчиком с 2024 года. Люблю делать понятные, полезные
            продукты и прокачивать команду через обмен опытом. Фокусируюсь на веб-разработке и ML:
            от анализа данных до интеграции моделей в реальные сервисы.
          </p>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Навыки</h2>
            <h3>Общее</h3>
            <ul>
              {skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Стек технологий</h3>
            <ul>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Достижения</h2>
            <ul>
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>Образование и курсы</h2>
            <div className="divider" />
            {education.map((item) => (
              <section key={`${item.period}-${item.place}`} className="edu-item">
                <p className="edu-period">{item.period}</p>
                <p className="edu-place">{item.place}</p>
                <p>{item.details}</p>
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default App;
