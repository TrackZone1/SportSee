/**
 * Classe Model pour formater les données utilisateur (User Main Data)
 */
export class UserModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    // Standardisation du score, que la propriété de l'API s'appelle 'todayScore' ou 'score'
    this.score = data.todayScore || data.score || 0;
    this.keyData = data.keyData;
  }
}

/**
 * Classe Model pour formater l'activité quotidienne
 */
export class UserActivityModel {
  constructor(data) {
    this.userId = data.userId;
    // Formatage des dates si besoin, par ex: garder uniquement le jour du mois pour l'abscisse
    this.sessions = data.sessions.map((session) => {
      const date = new Date(session.day);
      return {
        ...session,
        day: date.getDate().toString() // Ex: "01" -> "1"
      };
    });
  }
}

/**
 * Classe Model pour formater la durée de session moyenne
 */
export class UserAverageSessionsModel {
  constructor(data) {
    this.userId = data.userId;
    const dayMap = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D'
    };
    // Transorme les identifiants de jour 1..7 par l'initiale de la semaine
    this.sessions = data.sessions.map((session) => ({
      ...session,
      day: dayMap[session.day]
    }));
  }
}

/**
 * Classe Model pour formater la performance (radar chart)
 */
export class UserPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    const kindMapFR = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité'
    };

    // Formate les données pour que le kind (identifiant numérique) soit remplacé par le label français correspondant
    // On peut aussi inverser l'ordre des données pour correspondre exactement à l'attendu du design
    this.data = data.data.map((item) => {
      const kindKey = data.kind[item.kind]; 
      return {
        ...item,
        kind: kindMapFR[kindKey]
      };
    });
  }
}
