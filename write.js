import fs from "fs"

export const writeToFile = (file, args) => {
    fs.writeFileSync(file, args)
}

