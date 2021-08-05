import React, {useState} from 'react'

function Skills() {
    const [skills, setSkills] = useState([{id : new Date().toTimeString(), value : ''}]);

    const addSkill = () => {
        const newSkills = [...skills, { id: new Date().toString(), value: '' }];
        setSkills(newSkills);
    };

    const handleChange = (id, event) => {
        const newSkills = skills.map(skill => {
            if (skill.id === id) {
                skill.value = event.target.value;
            }
            return skill;
        });
        setSkills(newSkills);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(skills);
    }

    return (
        <form onSubmit={handleSubmit}>
            {skills.map(skill => {
                return (
                  <div key={skill.id}>
                    <input onChange={event => handleChange(skill.id, event)} type="text" /> <br />
                  </div>
                );
            })}
            <button onClick={addSkill}>Add Skill</button> <br />
            {/* <input type="submit"  /> */}
        </form>
    )
}

export default Skills
