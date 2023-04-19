import styles from '../styles/Pokemon.module.css';

function Pokemon(props) {
    const { type } = props;
    let pokeType = styles.normal;
    switch (type) {
        case 'fire':
            pokeType = styles.fire;
            break;
        case 'bug':
            pokeType = styles.bug;
            break;
        case 'grass':
            pokeType = styles.grass;
            break;
        case 'electric':
            pokeType = styles.electric;
            break;
        case 'water':
            pokeType = styles.water;
            break;
        case 'ground':
            pokeType = styles.ground;
            break;
        case 'rock':
            pokeType = styles.rock;
            break;
        case 'fairy':
            pokeType = styles.fairy;
            break;
        case 'poison':
            pokeType = styles.poison;
            break;
        case 'dragon':
            pokeType = styles.dragon;
            break;
        case 'psychic':
            pokeType = styles.psychic;
            break;
        case 'flying':
            pokeType = styles.flying;
            break;
        case 'fighting':
            pokeType = styles.fighting;
            break;
        default:
            pokeType = styles.normal;
    }
    return (
        <div className={`${styles.pokemon} ${pokeType}`}>
            <div className={styles.imgContainer}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name[0].toUpperCase() + props.name.slice(1)}</h3>
                <span className={styles.type}>Type: <span>{props.type}</span></span>
            </div>
        </div>
    );
}

export default Pokemon;
