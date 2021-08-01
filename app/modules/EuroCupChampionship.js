import Championship from "./Championship.js";

export default class EuroCupChampionship extends Championship {
  //Constructor
  //============================================================================
  constructor(name, teams = [], config = {}) {
    super(name, teams, config);
  }

  //============================================================================
  // Configuración del campeonato por defecto o se sobreescribe
  //============================================================================
  setup(config) {
    const defaultConfig = {
      rounds: 1,
    };
    this.config = Object.assign(defaultConfig, config);
  }

  //============================================================================
  //Establecer la configuración inicial
  //============================================================================
  checkInitialSetup(config) {
    const defaultConfig = {
      rounds: 1,
    };
    this.config = Object.assign(defaultConfig, config);
  }

  //============================================================================
  //Configuración equipos
  //============================================================================
  setupTeams(teamNames) {
    this.teams = [];
    for (const teamName of teamNames) {
      const team = this.customizeTeam(teamName);
      this.teams.push(team);
    }
  }

  //============================================================================
  //Configuración equipo
  //============================================================================
  customizeTeam(teamName) {
    return {
      name: teamName,
    };
  }
}
