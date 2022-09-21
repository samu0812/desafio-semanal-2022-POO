let ACTIONS_ACCEPTED = ["run", "jump"];
let TRACK_ACCEPTED = ["_", "|"];

function race(actions, track) {
    let race_clear = true
    let track_ended = ""

    if ((track.length) == 0 && (actions.length) == 0){
        return race_clear
    } else if ((track.length) > 0 && (actions.length) == 0){
        return !race_clear
    }

    for (const i in (track.length)) {
        let track_type = track[i]

        if (i >= (actions.length)){
            let action_type = actions[-1].lower()
        }else{
        (action_type = actions[i].lower())}

        if (!track_type in TRACK_ACCEPTED || !action_type in ACTIONS_ACCEPTED){
            track_ended += "E"
            race_clear = false
        }else if (track_type == "_" && action_type == "jump"){
            track_ended += "x"
            race_clear = false
        }else if (track_type == "|" && action_type == "run"){
            track_ended += "/"
            race_clear = false
        }else{
            track_ended += track[i]
        }
    }

    console.log("Track Finished: ", {track_ended})
    return race_clear
}

race(["run", "jump", "run"], "|")
race(["run", "jump", "run", "jump", "run"], "|")
race(["swim", "dance", "correr"], "_")
race(["run", "jump", "run"], "_|||")
race(["run"], "____")
race(["jump"], "__|__")
race([], "|")
race([], "")