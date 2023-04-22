import PageHeader from "@/components/PageHeader";
import SkillItem from "./SkillItem";
import { ImHtmlFive } from 'react-icons/im'

export default function Skill() {
    return (
        <div className="bg-[#323338] py-4 md:py-24 px-4">
            <div className="container mx-auto">
                <PageHeader header="Skill" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                    <SkillItem 
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?"
                    />
                </div>
            </div>
        </div>
    )
}