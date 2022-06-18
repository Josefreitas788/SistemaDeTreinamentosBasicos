

class FichaDeTreinamento {
	#objetivo
	#frequencia
	#avaliacaoPosTreino
	#nome
	/**
	* Constructor da Classe FichaDeTreinamento
	*
	* @param {String} objetivo
	* @param {String} frequencia
	* @param {string} avaliacaoPosTreino
	* @param {String} nome
	* @returns {bool}
	*/
	constructor(objetivo, frequencia, avaliacaoPosTreino, nome) {
		this.#objetivo = objetivo
		this.#frequencia = frequencia
		this.#avaliacaoPosTreino = avaliacaoPosTreino
		this.#nome = nome
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getObjetivo() {
		return this.#objetivo
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getFrequencia(){
		return this.#frequencia
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getAvaliacaoPosTreino() {
		return this.#avaliacaoPosTreino
	}

		/**
	* @param {void}
	* @returns {String}
	*/
	get getNome(){
		return this.#nome
	}


	/**
	* @param {String} objetivo
	* @returns {bool}
	*/
	set setObjetivo(objetivo) { return true}
	
	/**
	* @param {String} frequencia
	* @returns {bool}
	*/
	set setFrequencia(frequencia){ return true}

	/**
	* @param {String} avaliacaoPosTreino
	* @returns {bool}
	*/
	set setAvaliacaoPosTreino(avaliacaoPosTreino) {return true}

	/**
	* @param {String} nome
	* @returns {bool}
	*/
	set setNome(nome){ return true}
}

module.exports = FichaDeTreinamento;