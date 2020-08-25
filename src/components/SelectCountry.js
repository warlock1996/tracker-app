import { FormControl , NativeSelect  } from '@material-ui/core'
import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext'

function SelectCountry ({data}) {
    const { dispatcher } = useContext(GlobalContext)
    const { countries } = data.read()
    function SetCountry (e) {
        dispatcher({type: 'set-country', payload: e.target.value})
    }
    return (
        <FormControl>
            <NativeSelect variant="filled" className="select" id="select-country" onChange={ SetCountry }>
                <option value="Global">Global</option>
                    {
                        countries.map((c, i) => <option key={i} value={c.name}>{c.name}</option> )
                    }
            </NativeSelect>
        </FormControl>
    )
}

export default SelectCountry;