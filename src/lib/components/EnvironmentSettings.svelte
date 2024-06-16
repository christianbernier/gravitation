<script lang="ts">
	import type { Environment } from "$lib/environment";
	import InputRow from "./InputRow.svelte";
	import SettingsForm from "./SettingsForm.svelte";

  export let settings: Environment;
</script>

<SettingsForm sectionTitle="Environment">
  <div slot="form">
    <InputRow sideBySide={true}>
      <input type="checkbox" bind:checked={settings.stars}>
      <span>Stars</span>
    </InputRow>
    <InputRow sideBySide={true}>
      <input type="checkbox" bind:checked={settings.grid}>
      <span>Grid</span>
    </InputRow>
  </div>
</SettingsForm>
