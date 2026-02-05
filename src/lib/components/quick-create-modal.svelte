<script lang="ts">
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import ShirtIcon from "@tabler/icons-svelte/icons/shirt";
	import ShoppingCartIcon from "@tabler/icons-svelte/icons/shopping-cart";
	import Receipt2Icon from "@tabler/icons-svelte/icons/receipt-2";
	import FileTextIcon from "@tabler/icons-svelte/icons/file-text";
	import UsersIcon from "@tabler/icons-svelte/icons/users";
	import TagIcon from "@tabler/icons-svelte/icons/tag";

	let { open = $bindable(false) }: { open: boolean } = $props();

	const quickCreateItems = [
		{
			title: "New Product",
			description: "Add a new product to your catalog",
			icon: ShirtIcon,
			action: () => console.log("Create new product"),
		},
		{
			title: "New Order",
			description: "Create a new sales order",
			icon: ShoppingCartIcon,
			action: () => console.log("Create new order"),
		},
		{
			title: "Record Expense",
			description: "Log a new business expense",
			icon: Receipt2Icon,
			action: () => console.log("Record expense"),
		},
		{
			title: "New Invoice",
			description: "Generate a new invoice",
			icon: FileTextIcon,
			action: () => console.log("Create new invoice"),
		},
		{
			title: "Add Worker",
			description: "Invite a new team member",
			icon: UsersIcon,
			action: () => console.log("Add worker"),
		},
		{
			title: "Add Category",
			description: "Create a new product category",
			icon: TagIcon,
			action: () => console.log("Add category"),
		},
	];

	function handleAction(action: () => void) {
		action();
		open = false;
	}
</script>

<Drawer.Root bind:open>
	<Drawer.Content>
		<Drawer.Header class="text-left">
			<Drawer.Title>Quick Create</Drawer.Title>
			<Drawer.Description>Select an action to quickly create new items</Drawer.Description>
		</Drawer.Header>
		<div class="grid grid-cols-1 gap-3 px-4 py-4 md:grid-cols-2">
			{#each quickCreateItems as item (item.title)}
				<button
					onclick={() => handleAction(item.action)}
					class="flex flex-col items-start gap-2 rounded-lg border border-border p-3 text-left transition-all hover:bg-accent hover:text-accent-foreground"
				>
					<div class="flex items-center gap-2">
						<item.icon class="size-5" />
						<span class="font-medium">{item.title}</span>
					</div>
					<p class="text-sm text-muted-foreground">{item.description}</p>
				</button>
			{/each}
		</div>
	</Drawer.Content>
</Drawer.Root>
