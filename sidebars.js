/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'README',

    {
      type: 'category',
      label: 'Part 1: Turbo Drive',
      collapsible: true,
      collapsed: false,
      items: [
        "01/create_project",
        "01/install_turbo",
        "01/create_task_app",
        "01/render_form",
        "01/explore_turbo_drive_1",
        "01/turbo_drive_with_form",
      ],
    },

    {
      type: 'category',
      label: 'Part 2: Turbo Frame',
      collapsible: true,
      collapsed: false,
      items: [
        "02/preparation",
        "02/turbo_frame_basic",
        "02/turbo_frame_2",
        "02/turbo_frame_3",
      ],
    },

    {
      type: 'category',
      label: 'Part 3: Stimulus',
      collapsible: true,
      collapsed: false,
      items: [
        "03/preparation",
        "03/stimulus_controller",
        "03/stimulus_controller_2",
        "03/stimulus_controller_3",
        "03/stimulus_controller_date_picker",
        "03/stimulus_form_controller",
      ],
    },

    {
      type: 'category',
      label: 'Part 4: UI Examples',
      collapsible: true,
      collapsed: false,
      items: [
        "04/components",
        "04/click_load",
        "04/auto_load",
        "04/click_edit",
        "04/click_delete",
        "04/form_validation",
        "04/type_search",
        "04/progress_bar",
        "04/infinite_scroll",
        "04/file_upload",
        "04/confirm",
        "04/sortable",
        "04/bulk_operation",
        "04/cascading_selects",
      ],
    },

  ],
};

module.exports = sidebars;
