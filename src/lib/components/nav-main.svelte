<script lang="ts">
        import CirclePlusFilledIcon from "@tabler/icons-svelte/icons/circle-plus-filled";
        import MailIcon from "@tabler/icons-svelte/icons/mail";
        import ChevronRightIcon from "@tabler/icons-svelte/icons/chevron-right";
        import { Button } from "$lib/components/ui/button/index.js";
        import * as Sidebar from "$lib/components/ui/sidebar/index.js";
        import QuickCreateModal from "./quick-create-modal.svelte";
        import type { Icon } from "@tabler/icons-svelte";

        interface NavItem {
                title: string;
                url: string;
                icon?: Icon;
                items?: { title: string; url: string }[];
        }

        let { items, showQuickCreate = true }: { items: NavItem[], showQuickCreate?: boolean } = $props();
        let showQuickCreateModal = $state(false);
</script>

<Sidebar.Group>
        <Sidebar.GroupContent class="flex flex-col gap-2">
                {#if showQuickCreate}
                <Sidebar.Menu>
                        <Sidebar.MenuItem class="flex items-center gap-2">
                                <Sidebar.MenuButton
                                        class="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                                        tooltipContent="Quick create"
                                        onclick={() => (showQuickCreateModal = true)}
                                >
                                        <CirclePlusFilledIcon />
                                        <span>Quick Create</span>
                                </Sidebar.MenuButton>
                                <Button
                                        size="icon"
                                        class="size-8 group-data-[collapsible=icon]:opacity-0"
                                        variant="outline"
                                >
                                        <MailIcon />
                                        <span class="sr-only">Inbox</span>
                                </Button>
                        </Sidebar.MenuItem>
                </Sidebar.Menu>
                {/if}
                <Sidebar.Menu>
                        {#each items as item (item.title)}
                                {#if item.items && item.items.length > 0}
                                        <Sidebar.MenuItem>
                                                <Sidebar.MenuButton
                                                        class="group"
                                                        asChild
                                                        tooltipContent={item.title}
                                                >
                                                        {#snippet child({ props })}
                                                                <a href={item.url} {...props} class="flex items-center justify-between w-full">
                                                                        <span class="flex items-center gap-2">
                                                                                {#if item.icon}
                                                                                        <item.icon />
                                                                                {/if}
                                                                                <span>{item.title}</span>
                                                                        </span>
                                                                </a>
                                                        {/snippet}
                                                </Sidebar.MenuButton>
                                                <Sidebar.MenuSub>
                                                        {#each item.items as subItem (subItem.title)}
                                                                <Sidebar.MenuSubItem>
                                                                        <Sidebar.MenuSubButton asChild>
                                                                                {#snippet child({ props })}
                                                                                        <a href={subItem.url} {...props}>
                                                                                                {subItem.title}
                                                                                        </a>
                                                                                {/snippet}
                                                                        </Sidebar.MenuSubButton>
                                                                </Sidebar.MenuSubItem>
                                                        {/each}
                                                </Sidebar.MenuSub>
                                        </Sidebar.MenuItem>
                                {:else}
                                        <Sidebar.MenuItem>
                                                <Sidebar.MenuButton asChild tooltipContent={item.title}>
                                                        {#snippet child({ props })}
                                                                <a href={item.url} {...props}>
                                                                        {#if item.icon}
                                                                                <item.icon />
                                                                        {/if}
                                                                        <span>{item.title}</span>
                                                                </a>
                                                        {/snippet}
                                                </Sidebar.MenuButton>
                                        </Sidebar.MenuItem>
                                {/if}
                        {/each}
                </Sidebar.Menu>
        </Sidebar.GroupContent>
</Sidebar.Group>

<QuickCreateModal bind:open={showQuickCreateModal} />
