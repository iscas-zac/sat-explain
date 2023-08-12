import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver();

export default function link_to_target(source: HTMLElement, target: string,
    title: string, description: string) {
    source.addEventListener("click", () => {
        driverObj.highlight({
            element: target,
            popover: {
                title,
                description
            }
        })
    })
};