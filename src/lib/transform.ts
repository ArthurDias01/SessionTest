import { InputData, OutputData, Session, SessionsByUser } from "@/interfaces/global";

export function transformData(input: InputData): OutputData {
  const { events } = input;

  //Cria um objeto vazio para armazenar as sessões de cada usuário
  const sessionsByUser: SessionsByUser = {};

  // Ordenar eventos por timestamp em ordem crescente
  events.sort((a, b) => a.timestamp - b.timestamp);

  // Agrupar eventos por visitorId
  for (const event of events) {
    const { visitorId, timestamp, url } = event;

    // Se o visitorId não existir, cria um array vazio para armazenar as sessões
    if (!sessionsByUser[visitorId]) {
      sessionsByUser[visitorId] = [];
    }

    const sessions = sessionsByUser[visitorId];

    // Se o visitorId existir, pega a última sessão
    const currentSession = sessions.length > 0 ? sessions[sessions.length - 1] : null;

    // Se a última sessão existir e o timestamp for menor que 10 minutos, adiciona a página à sessão
    if (
      currentSession &&
      timestamp - currentSession.startTime <= 10 * 60 * 1000
    ) {
      currentSession.pages.push(url);
      currentSession.duration = timestamp - currentSession.startTime;
    } else {
      // Se a última sessão não existir ou o timestamp for maior que 10 minutos, cria uma nova sessão
      const newSession: Session = {
        duration: 0,
        pages: [url],
        startTime: timestamp,
      };
      sessions.push(newSession);
    }
  }

  // Ordenar sessões e páginas cronologicamente para cada visitante
  for (const visitorId in sessionsByUser) {
    sessionsByUser[visitorId].forEach((session) => {
      session.pages.sort();
    });
    sessionsByUser[visitorId].sort((a, b) => a.startTime - b.startTime);
  }

  return { sessionsByUser };
}
