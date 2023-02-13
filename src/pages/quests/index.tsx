import React, { useState } from "react"

import Quests from "modules/Quests"
import Layout from "components/Layout"

const QuestPage = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<div></div>}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Quests sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default QuestPage