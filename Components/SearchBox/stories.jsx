import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { doc } from 'storybook-readme';
import README from './README.md';
import SearchBox from "./index";

storiesOf('SearchBox', module).add('Overview', doc(README));
storiesOf("SearchBox", module).addWithChapters('Display',  {
  chapters: [
    {
      sections: [
        {
          title: "Default",
          info: "The default SearchBox provides a throttled onChange callback",
          sectionFn: () => (
            <SearchBox onChange={action("Throttled search term")} />
          )
        }, {
          title: "With placeholder",
          info: "SearchBox can also show an optional placeholder text",
          sectionFn: () => (
            <SearchBox placeholder="Search for?" onChange={action("Throttled search term")} />
          )
        }
      ]
    }
  ]
});
