const code = {
    ['bt-target']: {
        code: `local peds = {
        \`mp_m_shopkeep_01\`,
        \`a_m_y_hippy_01\`,
        \`csb_chef\`,
        \`a_f_y_hipster_02\`,
        \`s_m_y_prisoner_01\`,
        }

AddTargetModel(peds, {
    options = {
        {
            event = "esx_inventoryhud:openStore",
            icon = "fas fa-dumpster",
            label = "Purchase Items",
            entityLocation = {
            vector3(123.0, 456.0, 789.0),
            vector3(987.0, 654.0, 321.0),
        }
    }},
    distance = 2.5,
    vehicle=true --Not needed if entity doesn't need to be a vehicle, and not in polyZone
    }
)`,
        snippet: 'BT Target is used for the 3rd eye. It allows us to remove unnecersary constant distance checks. '
    },
    ['blrp']: {
        code: `xPlayer.charId -> Will return this chars current id. Used for updating the database when used with xPlayer.identifier
userData.name -> Will return this chars full rp name.
userData.gender -> Will return this chars gender. Retval = 'm' or 'f'
userData.dob -> Will return this chars date of birth. Retval = dd-mm-yyy
TriggerEvent('esx:loadingScreenOff') --This is triggered once a player has chosen there char and their ped has been loaded.`,
        snippet: 'Because ESX is weird and never had these as a base feature, I added it. We can now use the following.. charId will be required (along with identifier) to update that players current character.'
    },
    ['vehicles']: {
        code: `local vehicle = CreateVehicle(config.vehicle, config.spawnLocation, config.spawnLocation.heading, 1, 1)
TriggerServerEvent("carlock:issueTempKey", GetVehicleNumberPlateText(vehicle));`,
        snippet: 'Due to vehicles being locked on spawn. We can utilize, "carlock:issueTempKey" to issue a temp key to a player. You need to pass over the vehicles license plate.'
    },
    ['mythic_progbar']: {
        code: `TriggerEvent("mythic_progbar:client:progress", {
    name = "preparing_lockpick",
    duration = 3000,
    label = "Preparing Tools",
    useWhileDead = false,
    canCancel = false,
    controlDisables = {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = false,
    },
    animation = {
        animDict = "anim@amb@clubhouse@tutorial@bkr_tut_ig3@",
        anim = "machinic_loop_mechandplayer",
    }
}, function(status)
    if status then
        -- progress bar finished without being cancelled. 
    end
end)`,
        snippet: 'Mythic Prog Bar is used to play a progress bar, along with an animation if one is passed to it.'
    },
    ['mythic_progbar']: {
        code: `exports['mythic_notify']:SendAlert('type', 'message') --Valid types: inform, success, error`,
        snippet: 'Mythic Notify is used to show the messages in the top right..'
    }


}